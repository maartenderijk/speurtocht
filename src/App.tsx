import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-locate";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";

import { loadGeoJSONLayer, updateMapView } from "./loadLayer";
import { useRef, useState } from "react";
import MapView from "@arcgis/core/views/MapView";

function App() {
  const mapViewRef = useRef<MapView>(null);
  const [questionNumber, setQuestionNumber] = useState(1);

  const handleAddFeature = () => {
    const updatedItemId = questionNumber + 1;
    if (mapViewRef.current) {
      updateMapView(mapViewRef.current, updatedItemId);
      setQuestionNumber(updatedItemId);
    }
  };


  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <Dialog
        open={false}>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            This is a dialog box with an ArcGIS map component inside it.
          </Typography>
        </DialogContent>
      </Dialog>
      <arcgis-map
        itemId="beccdc887c2641a69b21e0652a0a801d"
        onarcgisViewReadyChange={(event) => {
          const view = event.target.view
          mapViewRef.current = view;
          loadGeoJSONLayer(view);
        }}
      >
        <arcgis-locate position="top-right" />
      </arcgis-map>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddFeature}
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 1000,
        }}
      >
        Add Location
      </Button>
    </Box>
  );
}

export default App
