import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";

export default function Appbar() {
  const navigate = useNavigate();
  const gotoHome =()=>{
    navigate("/")
  }
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "mycolor.main"}}
      >
        <Toolbar>
          <AdbIcon
            sx={{ display: { xs: "none", sm: "flex" }, mr: 1, color: "primary.main" }}
          />
          <Typography variant="h6" noWrap 
          onClick={gotoHome} sx={{color:"primary.main"}}>
            Quote App
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
