import { Map as MapboxMap } from 'mapbox-gl';
import { OrigamiGeolocationService } from '../services/origami-geolocation.service';
import { Plugins, GeolocationPosition } from '@capacitor/core';
import { Subscription } from 'rxjs';

// VR world
import { environment } from 'src/environments/environment';


export enum GeolocateType {
    None,
    Continuous,
    Button,
    TaskStart
}

export class GeolocateControl {
    private positionSubscription: Subscription;
    private geolocateType: GeolocateType = GeolocateType.None;

    // VR world
    isVirtualWorld: boolean = false;
    private avatarPositionSubscription: Subscription;

    private map: MapboxMap;

    private isInitalized = false;

    constructor(map: MapboxMap, private geolocationService: OrigamiGeolocationService, isVirtualWorld: boolean) {
        this.map = map;

        // VR world (to check type of the game)
        this.isVirtualWorld = isVirtualWorld;

        if (!isVirtualWorld) {
            this.positionSubscription = this.geolocationService.geolocationSubscription.subscribe(position => {
                if (this.map && this.map.getLayer('geolocate')) {
                    this.map.getSource('geolocate').setData({
                        type: 'Point',
                        coordinates: [position.coords.longitude, position.coords.latitude]
                    });
                }
            });
        } else {
            // VR world
            this.avatarPositionSubscription = this.geolocationService.avatarGeolocationSubscription.subscribe(message => {
                if (this.map && this.map.getLayer('geolocate')) {
                    this.map.getSource('geolocate').setData({
                        type: 'Point',
                        coordinates: [parseFloat(message["x"]) / 111000, parseFloat(message["z"]) / 111200]
                    });
                }
            });
        }

        this.map.loadImage(
            '/assets/icons/position.png',
            (error, image) => {
                if (error) throw error;

                this.map.addImage('geolocate', image);

                this.map.addSource('geolocate', {
                    type: 'geojson',
                    data: {
                        type: 'Point',
                        coordinates: (this.isVirtualWorld ? [environment.initialAvatarLoc.lng, environment.initialAvatarLoc.lat] : [0, 0])
                    }
                });
                this.map.addLayer({
                    id: 'geolocate',
                    source: 'geolocate',
                    type: 'symbol',
                    layout: {
                        'icon-image': 'geolocate',
                        'icon-size': 0.4,
                        'icon-offset': [0, 0]
                    }
                });
                this.map.setLayoutProperty('geolocate', 'visibility', 'none');
                this.isInitalized = true;
                this.update();
            });
    }

    public setType(type: GeolocateType): void {
        if (this.map != undefined) {
            this.geolocateType = type;
            this.reset();
            this.update();
        }
    }

    toggle() {
        if (this.map.getLayoutProperty('geolocate', 'visibility') == 'none') {
            this.map.setLayoutProperty('geolocate', 'visibility', 'visible');
        } else {
            this.map.setLayoutProperty('geolocate', 'visibility', 'none');
        }

    }

    private reset(): void {
        if (this.map.getLayer('geolocate') && this.map.getLayoutProperty('geolocate', 'visibility') == 'visible')
            this.map.setLayoutProperty('geolocate', 'visibility', 'none');

    }

    private update(): void {
        if (!this.isInitalized) {
            return;
        }
        switch (this.geolocateType) {
            case GeolocateType.None:
                this.reset();
                break;
            case GeolocateType.Continuous:
                if (this.map.getLayoutProperty('geolocate', 'visibility') == 'none')
                    this.map.setLayoutProperty('geolocate', 'visibility', 'visible');

                break;
            case GeolocateType.Button:
                // TODO: implement
                break;
            case GeolocateType.TaskStart:
                if (this.map.getLayoutProperty('geolocate', 'visibility') == 'none')
                    this.map.setLayoutProperty('geolocate', 'visibility', 'visible');

                setTimeout(() => {
                    this.map.setLayoutProperty('geolocate', 'visibility', 'none');
                }, 10000);
                break;
        }
    }

    public remove(): void {
        this.reset();
        
        if (!this.isVirtualWorld) {
            this.positionSubscription.unsubscribe();
        } else {
            this.avatarPositionSubscription.unsubscribe();
        }
    }
}