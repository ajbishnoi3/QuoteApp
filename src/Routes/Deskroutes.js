import { Routes, Route } from "react-router-dom";
import Appbar from "../Components/Desktop/Appbar";
import Deskdrawer from "../Components/Desktop/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import DeskHome from "../Components/Desktop/Home";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";

export default function Deskroutes() {
  const Root = styled("div")(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  }));
  return (
    <>
      <Root>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Appbar />
          <Deskdrawer />
          <Box component="main" pt={8} sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<DeskHome />} />
            </Routes>
          </Box>
        </Box>
      </Root>
    </>
  );
}
