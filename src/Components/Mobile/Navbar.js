import * as React from "react";
import { red,grey } from "@mui/material/colors";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";

export default function Navbar() {
  return (
    <AppBar position="fixed" sx={{ bgcolor: grey[50] }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", sm: "flex" }, mr: 1,color:red[500]}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color:red[500]
            }}
          >
            Quote App
          </Typography>
          <AdbIcon sx={{ display: { xs: "flex", sm: "none" }, mr: 1,color:red[500] }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: red[500],
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
