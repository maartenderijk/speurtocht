import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-locate";
import { Box, } from "@mui/material";

import { loadGeoJSONLayer, updateGeoJSONlayer } from "./layer";
import { useRef, useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import QuestionDialog from "./QuestionDialog";

function App() {
  const mapViewRef = useRef<MapView>(null);
  const layerRef = useRef<GeoJSONLayer>(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);


  const handleMapClick = async (event: __esri.ViewClickEvent) => {
    if (!mapViewRef.current || !layerRef.current) return;

    const view = mapViewRef.current;
    const response = await view.hitTest(event);

    if (response.results.length > 0) {
      const graphicResults = response.results.filter(results => results.type === 'graphic');

      if (graphicResults.length > 0) {
        const id = graphicResults[0].graphic.attributes?.id;
        setQuestionNumber(id);
        setDialogOpen(true);
      }
    }
  };

  const handleCorrectAnswer = () => {
    const updatedItemId = questionNumber + 1;
    if (mapViewRef.current) {
      updateGeoJSONlayer(mapViewRef.current, updatedItemId);
      setDialogOpen(false);
      setQuestionNumber(updatedItemId);
    }
    setDialogOpen(false);
  }



  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <QuestionDialog open={dialogOpen} questionNumber={questionNumber} handleClose={handleCorrectAnswer} />
      <arcgis-map
        itemId="beccdc887c2641a69b21e0652a0a801d"
        onarcgisViewReadyChange={(event) => {
          const view = event.target.view;
          mapViewRef.current = view;
          layerRef.current = loadGeoJSONLayer(view);
          view.on("click", handleMapClick);
        }}
      >
        <arcgis-locate position="top-right" />
      </arcgis-map>
    </Box>
  );
}

export default App;
