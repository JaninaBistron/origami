import { Map as MapboxMap } from "mapbox-gl";
import { MapboxStyleSwitcherControl } from "mapbox-gl-style-switcher";
import MapboxCompare from "mapbox-gl-compare";
import { ElementRef, Injectable, ViewChild } from '@angular/core';
import {
    DeviceOrientation,
    DeviceOrientationCompassHeading
} from "@ionic-native/device-orientation/ngx";
import { Subscription } from 'rxjs';
import { AlertController, Platform } from '@ionic/angular';


export enum LayerType {
    Standard,
    Selection,
    Satellite,
    SatelliteButton,
    Swipe,
    ThreeDimension,
    ThreeDimensionButton
}

export class LayerControl {
    private map: MapboxMap;
    private alertController: AlertController;
    private platform: Platform;
    private layerType: LayerType;
    private styleSwitcherControl: MapboxStyleSwitcherControl = new MapboxStyleSwitcherControl();
    private swipeMapContainer: ElementRef;
    private deviceOrientationSubscription: Subscription;
    private mapWrapper: ElementRef;

    private compare: MapboxCompare;

    private interval: NodeJS.Timeout;
    private satMap: MapboxMap;

    private tilt = (e: DeviceOrientationEvent) => {
        if (e.beta <= 60 && e.beta >= 0) {
            requestAnimationFrame(() => {
                this.map.setPitch(e.beta);
            })
        }
    }

    constructor(map: MapboxMap, mapWrapper: ElementRef, private deviceOrientation: DeviceOrientation, alertController: AlertController, platform: Platform) {
        this.map = map;
        this.alertController = alertController;
        this.platform = platform;
        this.mapWrapper = mapWrapper;

        this.map.addSource('satellite', {
            type: "raster",
            url: "mapbox://mapbox.satellite",
            tileSize: 256
        })
    }

    public setType(type: LayerType, swipeMapContainer: ElementRef = undefined): void {
        if (this.map != undefined) {
            this.layerType = type
            this.reset();
            this.swipeMapContainer = swipeMapContainer
            this.update();
        }
    }

    public toggleSat() {
        if (this.map.getLayer('satellite')) {
            this.map.removeLayer('satellite')
        } else {
            this.map.addLayer({
                id: "satellite",
                source: 'satellite',
                type: "raster"
            }, 'country-label-lg');
        }
    }

    public toggle3D() {
        if (this.layerType != LayerType.ThreeDimension) {
            this.setType(LayerType.ThreeDimension)
        } else {
            this.setType(LayerType.Standard)
        }
    }

    private reset(): void {
        if (this.deviceOrientationSubscription != undefined)
            this.deviceOrientationSubscription.unsubscribe();
        removeEventListener('deviceorientation', this.tilt)
        if (this.map.getLayer('satellite')) {
            this.map.removeLayer('satellite')
        }
        if (this.map.getLayer('3d-buildings')) {
            this.map.removeLayer('3d-buildings')
        }
        try {
            this.map.removeControl(this.styleSwitcherControl)
        } catch (e) {
            console.log(e)
        }
        if (this.compare != null) {
            this.compare.remove()
            this.compare = null;
        }
        clearInterval(this.interval)
    }

    update = async () => {
        switch (this.layerType) {
            case LayerType.Standard:
                this.map.resetNorthPitch();
                break;
            case LayerType.Selection:
                this.map.addControl(this.styleSwitcherControl);
                break;
            case LayerType.Satellite:
                //this.map.setStyle("mapbox://styles/mapbox/satellite-v9");
                this.map.addLayer({
                    id: "satellite",
                    source: 'satellite',
                    type: "raster"
                });
                break;
            case LayerType.SatelliteButton:
                // TODO: implement
                break;
            case LayerType.Swipe:
                this.satMap = new MapboxMap({
                    container: this.swipeMapContainer.nativeElement,
                    style: "mapbox://styles/mapbox/satellite-v9",
                    center: [8, 51.8],
                    zoom: 2
                });

                this.satMap.loadImage(
                    "/assets/icons/position.png",
                    (error, image) => {
                        if (error) throw error;

                        this.satMap.addImage("geolocate", image);
                    });

                this.satMap.loadImage(
                    "/assets/icons/directionv2.png",
                    (error, image) => {
                        if (error) throw error;

                        this.satMap.addImage("view-direction", image);
                    });

                this.satMap.loadImage(
                    "/assets/icons/directionv2-richtung.png",
                    (error, image) => {
                        if (error) throw error;

                        this.satMap.addImage("view-direction-task", image);
                    })

                this.satMap.loadImage(
                    "/assets/icons/marker-editor.png",
                    (error, image) => {
                        if (error) throw error;

                        this.satMap.addImage("marker-editor", image);
                    })

                this.interval = setInterval(() => this.syncMaps(), 500)

                this.satMap.on('click', (e) => {
                    const pointFeature = this._toGeoJSONPoint(e.lngLat.lng, e.lngLat.lat);
                    if (this.map.getSource('marker-point')) {
                        this.map.getSource('marker-point').setData(pointFeature)
                    } else {
                        this.map.addSource('marker-point', {
                            'type': 'geojson',
                            'data': pointFeature
                        });
                    }
                })

                this.compare = new MapboxCompare(this.map, this.satMap, this.mapWrapper.nativeElement);
                break;
            case LayerType.ThreeDimension:
                this._add3DBuildingsLayer()
                // this.deviceOrientationSubscription = this.deviceOrientation
                //     .watchHeading({ frequency: 10 })
                //     .subscribe((data: DeviceOrientationCompassHeading) => {
                //         requestAnimationFrame(() => {
                //             this.map.setBearing(data.magneticHeading);
                //         })
                //     })
                if (this.platform.is('ios')) {
                    const alert = await this.alertController.create({
                        header: 'Neigungssensor nutzen?',
                        message: 'Bitte Bestätige die Nutzung des Neigungssensors',
                        buttons: [
                            {
                                text: 'Okay',
                                handler: () => {
                                    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
                                        (DeviceOrientationEvent as any).requestPermission()
                                            .then(permissionState => {
                                                if (permissionState === 'granted') {
                                                    window.addEventListener('deviceorientation', this.tilt, false);
                                                }
                                            })
                                            .catch(console.error);
                                    } else {
                                        addEventListener("deviceorientation", this.tilt, false);
                                    }
                                }
                            }
                        ]
                    });
                    alert.present();
                } else {
                    addEventListener("deviceorientation", this.tilt, false);
                }
                break;
            case LayerType.ThreeDimensionButton:
                // TODO: implement
                break;
        }
    }

    private _add3DBuildingsLayer(): void {
        // Add 3D buildungs
        // Insert the layer beneath any symbol layer.
        // var layers = this.map.getStyle().layers;

        // var labelLayerId;
        // for (var i = 0; i < layers.length; i++) {
        //     if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
        //         labelLayerId = layers[i].id;
        //         break;
        //     }
        // }

        this.map.addLayer(
            {
                id: "3d-buildings",
                source: "mapbox",
                "source-layer": "building",
                filter: ["==", "extrude", "true"],
                type: "fill-extrusion",
                minzoom: 15,
                paint: {
                    "fill-extrusion-color": "#aaa",

                    // use an 'interpolate' expression to add a smooth transition effect to the
                    // buildings as the user zooms in
                    "fill-extrusion-height": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        15,
                        0,
                        15.05,
                        ["get", "height"]
                    ],
                    "fill-extrusion-base": [
                        "interpolate",
                        ["linear"],
                        ["zoom"],
                        15,
                        0,
                        15.05,
                        ["get", "min_height"]
                    ],
                    "fill-extrusion-opacity": 0.6
                }
            },
            // labelLayerId
        );
    }

    public remove(): void {
        if (this.deviceOrientationSubscription != undefined)
            this.deviceOrientationSubscription.unsubscribe();
    }

    private syncMaps(): void {
        const defaultMapSources = this.map.getStyle().sources
        const { mapbox, satellite, ...sources } = defaultMapSources
        delete sources['raster-tiles']

        const layers = this.map.getStyle().layers.filter(l => l.id !== 'simple-tiles' && l.id !== 'building')

        Object.entries(sources).forEach(s => {
            if (this.satMap.getSource(s[0])) {
                this.satMap.getSource(s[0]).setData(s[1]['data'])
            } else {
                this.satMap.addSource(s[0], s[1])
            }
        })

        layers.forEach(l => {
            if (this.satMap.getLayer(l.id)) {
                if (l.id == 'viewDirection' || l.id == 'viewDirectionTask' || l.id == 'viewDirectionClick') {
                    const bearing = this.map.getLayoutProperty(l.id, 'icon-rotate')
                    this.satMap.setLayoutProperty(l.id, 'icon-rotate', bearing)
                }
            } else {
                this.satMap.addLayer(l)
            }
        })
    }

    public passMarkers(markers, callback: Function) {
        const { waypointMarker } = markers
        console.log(markers)
        waypointMarker.addTo(this.satMap)

    }

    private _toGeoJSONPoint = (lng, lat): GeoJSON.Feature<GeoJSON.Point> =>
        JSON.parse(`
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [${lng}, ${lat}]
    }
  }`);
}