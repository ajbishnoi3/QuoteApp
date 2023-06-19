import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import { red,grey } from "@mui/material/colors";

export default function Appbar() {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: grey[50]}}
      >
        <Toolbar>
          <AdbIcon
            sx={{ display: { xs: "none", sm: "flex" }, mr: 1, color: red[500] }}
          />
          <Typography variant="h6" noWrap component="div" sx={{color:red[500]}}>
            Quote App
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
