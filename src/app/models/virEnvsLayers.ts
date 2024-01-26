import { VirEnv_1, VirEnv_3, VirEnv_4, VirEnv_5, VirEnv_22, VirEnv_34, VirEnv_36, VirEnv_37 } from "./virEnvsProperties";

export const virEnvLayers: Readonly<any> = {
  VirEnv_1: {
    initialPosition: {
      lng: 224 / 111000,
      lat: 74 / 112000,
    },
    overlayCoords: VirEnv_1.overlayCoords,
    bounds: VirEnv_1.bounds,
    center: [0.00001785714286 / 2 + 0.002, 0.002936936937 / 2],
    zoom: 17,
  },
  VirEnv_2: {
    initialPosition: {
      lng: 214 / 111000,
      lat: 69 / 112000,
    },
    overlayCoords: VirEnv_1.overlayCoords,
    center: [0.00001785714286 / 2 + 0.002, 0.002936936937 / 2],
    bounds: VirEnv_1.bounds,
    zoom: 17,
  },
  VirEnv_3: {
    name: "Zoom Pre - Initial",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
    zoomInLayer1: "VirEnv_3_zoom1",
    zoomThreashold: VirEnv_3.zoomThreashold,
  },
  VirEnv_4: {
    name: "Zoom - Pre Easy",
    initialPosition: VirEnv_4.initialPosition,
    overlayCoords: VirEnv_4.overlayCoords,
    center: [0.001351351351 / 2, 0.001517857143 / 2],
    bounds: VirEnv_4.bounds,
    zoom: 17,
    zoomInLayer1: "VirEnv_4_zoom1",
    zoomThreashold: VirEnv_4.zoomThreashold,
  },
  VirEnv_5: {
    name: "Zoom - Pre Difficult",
    initialPosition: VirEnv_5.initialPosition,
    overlayCoords: VirEnv_5.overlayCoords,
    center: [0.001351351351 / 2 + 0.00023, 0.001517857143 / 2 + 0.000175],
    bounds: VirEnv_5.bounds,
    zoom: 19,
    zoomInLayer1: "VirEnv_5_zoom1",
    zoomThreashold: VirEnv_5.zoomThreashold,
  },
  VirEnv_6: {
    name: "Location Marker - Post Difficult",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_7: {
    name: "Location Marker - Post Easy",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_8: {
    name: "Location Marker - Pre Test Difficult",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_9: {
    name: "Location Marker - Pre Test Easy",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_10: {
    name: "Location Marker - Training 1",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_11: {
    name: "Location Marker - Training",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_12: {
    name: "Map Rotation - Post Difficult",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_13: {
    name: "Map Rotation - Post Easy 1",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_14: {
    name: "Map Rotation - Post Easy 2",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_15: {
    name: "Map Rotation - Pre Difficult",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_16: {
    name: "Map Rotation - Pre Easy 1",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_17: {
    name: "Map Rotation - Pre Easy 2",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_18: {
    name: "Map Rotation - Training 1",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_19: {
    name: "Map Rotation - Training 2",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_20: {
    name: "Map Rotation - Training 3",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_21: {
    name: "Map Rotation - Training 4",
    initialPosition: VirEnv_3.initialPosition,
    overlayCoords: VirEnv_3.overlayCoords,
    center: [0.001351351351 / 2, 0.001351351351 / 2],
    bounds: VirEnv_3.bounds,
    zoom: 17,
  },
  VirEnv_22: {
    name: "Landmarks - Post Difficult",
    initialPosition: VirEnv_22.initialPosition,
    overlayCoords: VirEnv_22.overlayCoords,
    center: [0.002252252252 / 2, 0.002232142857 / 2],
    bounds: VirEnv_22.bounds,
    zoom: 17,
  },
  VirEnv_23: {
    name: "Landmarks - ",
    initialPosition: VirEnv_22.initialPosition,
    overlayCoords: VirEnv_22.overlayCoords,
    center: [0.002252252252 / 2, 0.002232142857 / 2],
    bounds: VirEnv_22.bounds,
    zoom: 17,
  },
  VirEnv_24: {
    name: "Landmarks - ",
    initialPosition: VirEnv_22.initialPosition,
    overlayCoords: VirEnv_22.overlayCoords,
    center: [0.002252252252 / 2, 0.002232142857 / 2],
    bounds: VirEnv_22.bounds,
    zoom: 17,
  },
  VirEnv_25: {
    name: "Landmarks - ",
    initialPosition: VirEnv_22.initialPosition,
    overlayCoords: VirEnv_22.overlayCoords,
    center: [0.002252252252 / 2, 0.002232142857 / 2],
    bounds: VirEnv_22.bounds,
    zoom: 17,
  },
  VirEnv_26: {
    name: "Landmarks - ",
    initialPosition: VirEnv_22.initialPosition,
    overlayCoords: VirEnv_22.overlayCoords,
    center: [0.002252252252 / 2, 0.002232142857 / 2],
    bounds: VirEnv_22.bounds,
    zoom: 17,
  },
  VirEnv_27: {
    name: "Landmarks - ",
    initialPosition: VirEnv_22.initialPosition,
    overlayCoords: VirEnv_22.overlayCoords,
    center: [0.002252252252 / 2, 0.002232142857 / 2],
    bounds: VirEnv_22.bounds,
    zoom: 17,
  },
  VirEnv_28: {
    name: "Landmarks - ",
    initialPosition: VirEnv_22.initialPosition,
    overlayCoords: VirEnv_22.overlayCoords,
    center: [0.002252252252 / 2, 0.002232142857 / 2],
    bounds: VirEnv_22.bounds,
    zoom: 17,
  },
  VirEnv_29: {
    name: "MM - ",
    initialPosition: VirEnv_22.initialPosition,
    overlayCoords: VirEnv_22.overlayCoords,
    center: [0.002252252252 / 2, 0.002232142857 / 2],
    bounds: VirEnv_22.bounds,
    zoom: 17,
    satellite: "VirEnv_29_satellite",
  },
  VirEnv_30: {
    name: "MM - ",
    initialPosition: VirEnv_22.initialPosition,
    overlayCoords: VirEnv_22.overlayCoords,
    center: [0.002252252252 / 2, 0.002232142857 / 2],
    bounds: VirEnv_22.bounds,
    zoom: 17,
    satellite: "VirEnv_30_satellite",
  },
  VirEnv_31: {
    name: "MM - ",
    initialPosition: VirEnv_22.initialPosition,
    overlayCoords: VirEnv_22.overlayCoords,
    center: [0.002252252252 / 2, 0.002232142857 / 2],
    bounds: VirEnv_22.bounds,
    zoom: 17,
    satellite: "VirEnv_31_satellite",
  },
  VirEnv_32: {
    name: "MM",
    initialPosition: VirEnv_22.initialPosition,
    overlayCoords: VirEnv_22.overlayCoords,
    center: [0.002252252252 / 2, 0.002232142857 / 2],
    bounds: VirEnv_22.bounds,
    zoom: 17,
    satellite: "VirEnv_32_satellite",
  },
  VirEnv_33: {
    name: "MM - ",
    initialPosition: VirEnv_22.initialPosition,
    overlayCoords: VirEnv_22.overlayCoords,
    center: [0.002252252252 / 2, 0.002232142857 / 2],
    bounds: VirEnv_22.bounds,
    zoom: 17,
    satellite: "VirEnv_33_satellite",
  },
  VirEnv_34: {
    name: "Zoom - Post Easy",
    initialPosition: VirEnv_34.initialPosition,
    overlayCoords: VirEnv_34.overlayCoords,
    center: [0.001531531532 / 2, 0.001339285714 / 2],
    bounds: VirEnv_34.bounds,
    zoom: 17,
    zoomInLayer1: "VirEnv_34_zoom1",
    zoomThreashold: VirEnv_34.zoomThreashold,
  },
  VirEnv_35: {
    name: "Zoom - Post Difficult",
    initialPosition: VirEnv_34.initialPosition,
    overlayCoords: VirEnv_34.overlayCoords,
    center: [0.001531531532 / 2 + 0.00031, 0.001339285714 / 2 + 0.00023],
    bounds: VirEnv_34.bounds,
    zoom: 19,
    zoomInLayer1: "VirEnv_35_zoom1",
    zoomThreashold: VirEnv_34.zoomThreashold,
  },
  VirEnv_36: {
    name: "Zoom - Training",
    initialPosition: VirEnv_36.initialPosition,
    overlayCoords: VirEnv_36.overlayCoords,
    center: [0.002119500085399295, 0.0008621423878878431 ],
    bounds: VirEnv_36.bounds,
    zoom: 18.45,
    zoomInLayer1: "VirEnv_36_zoom1",
    zoomInLayer2: "VirEnv_36_zoom2",
    zoomThreashold: VirEnv_36.zoomThreashold,
    zoomThreashold2: VirEnv_36.zoomThreashold2,
  },
  VirEnv_37: {
    name: "School",
    initialPosition: VirEnv_37.initialPosition,
    overlayCoords: VirEnv_37.overlayCoords,
    center: [0.004837837838 - 0.004,	0.003383928571 ],
    bounds: VirEnv_37.bounds,
    zoom: 17.8,
  },
};
