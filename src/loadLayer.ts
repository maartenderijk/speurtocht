import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer.js";

const demoLocatiesGent = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [3.717424, 51.054342], // Coordinates for Gravensteen
    },
    properties: {
      name: "Gravensteen",
      description: "A medieval castle in the city center of Ghent.",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [3.725012, 51.053828], // Coordinates for St. Bavo's Cathedral
    },
    properties: {
      name: "St. Bavo's Cathedral",
      description: "A famous cathedral known for the Ghent Altarpiece.",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [3.720634, 51.056146], // Coordinates for Korenmarkt
    },
    properties: {
      name: "Korenmarkt",
      description: "A historic square in the heart of Ghent.",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [3.722556, 51.057441], // Coordinates for Graslei
    },
    properties: {
      name: "Graslei",
      description: "A picturesque quay by the river in Ghent.",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [3.726384, 51.054788], // Coordinates for Belfry of Ghent
    },
    properties: {
      name: "Belfry of Ghent",
      description: "A UNESCO World Heritage site and iconic bell tower.",
    },
  },
];

export const loadGeoJSONLayer = (mapView: MapView) => {
  const geoJSONLayer = createGeoJSONLayer(1);
  mapView.map.add(geoJSONLayer);
};

const createGeoJSONLayer = (itemId: number) => {
  const geoJSONLayer = new GeoJSONLayer({
    url: URL.createObjectURL(
      new Blob(
        [
          JSON.stringify({
            type: "FeatureCollection",
            features: demoLocatiesGent.slice(0, itemId),
          }),
        ],
        { type: "application/json" }
      )
    ),
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-marker",
        color: "blue",
        size: "8px",
        outline: {
          color: "white",
          width: 1,
        },
      },
    },
    popupTemplate: {
      title: "{name}",
      content: "{description}",
    },
  });
  return geoJSONLayer;
};

export const updateMapView = (mapView: MapView, itemId: number) => {
  console.log(itemId);
  const geoJSONLayer = createGeoJSONLayer(itemId);
  mapView.map.layers.removeAll();
  mapView.map.add(geoJSONLayer);
};
