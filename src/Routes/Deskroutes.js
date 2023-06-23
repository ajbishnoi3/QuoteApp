import { Routes, Route } from "react-router-dom";
import Appbar from "../Components/Desktop/Appbar";
import Deskdrawer from "../Components/Desktop/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "../Components/Common/Home";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Quotedetail from "../Components/Common/Quotedetail";
import Profile from "../Components/Common/Profile";

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
          <Box component="main" pt={11} sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Quote" element={<Quotedetail />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Box>
        </Box>
      </Root>
    </>
  );
}
