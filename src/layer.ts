import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer.js";
import locations from "./locations";

export const loadGeoJSONLayer = (mapView: MapView) => {
  const geoJSONLayer = createGeoJSONLayer(1);
  mapView.map.add(geoJSONLayer);
  return geoJSONLayer;
};

const createGeoJSONLayer = (itemId: number) => {
  const geoJSONLayer = new GeoJSONLayer({
    url: URL.createObjectURL(
      new Blob(
        [
          JSON.stringify({
            type: "FeatureCollection",
            features: locations.slice(0, itemId),
          }),
        ],
        { type: "application/json" }
      )
    ),
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-marker",
        color: "red",
        size: "16px",
        outline: {
          color: "white",
          width: 1,
        },
      },
    },
    labelingInfo: [
      {
        symbol: {
          type: "text",
          color: "black",
          haloColor: "white",
          haloSize: "1px",
          font: {
            size: 12,
            family: "Arial",
            weight: "bold",
          },
        },
        labelPlacement: "above-center",
        labelExpressionInfo: {
          expression: "$feature.id",
        },
      },
    ],
    outFields: ["*"],
  });
  return geoJSONLayer;
};

export const updateGeoJSONlayer = (mapView: MapView, itemId: number) => {
  const geoJSONLayer = createGeoJSONLayer(itemId);
  mapView.map.layers.removeAll();
  mapView.map.add(geoJSONLayer);
  return geoJSONLayer;
};
