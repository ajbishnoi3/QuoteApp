import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";

export default function Navbar() {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  return (
    <AppBar position="fixed" sx={{ bgcolor: "mycolor.main" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              display: { xs: "none", sm: "flex" },
              mr: 1,
              color: "primary.main",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            onClick={gotoHome}
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "primary.main",
            }}
          >
            Quote App
          </Typography>
          <AdbIcon
            sx={{
              display: { xs: "flex", sm: "none" },
              mr: 1,
              color: "primary.main",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            onClick={gotoHome}
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            Quote App
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
