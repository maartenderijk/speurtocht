import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-locate";
import { Box, Dialog, DialogContent, Typography } from "@mui/material";

import { loadGeoJSONLayer } from "./loadLayer";

function App() {
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
          loadGeoJSONLayer(view);
        }}
      >
        <arcgis-locate />
      </arcgis-map>
    </Box>
  );
}

export default App
