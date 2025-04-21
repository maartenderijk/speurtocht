import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-locate";
import { Box, Dialog, DialogContent, Typography } from "@mui/material";

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
        itemId="d5dda743788a4b0688fe48f43ae7beb9"
      >
        <arcgis-locate />
      </arcgis-map>
    </Box>
  );
}

export default App
