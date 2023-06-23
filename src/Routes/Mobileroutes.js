import { Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Navbar from "../Components/Mobile/Navbar";
import Home from "../Components/Common/Home";
import Quotedetail from "../Components/Common/Quotedetail";
import Profile from "../Components/Common/Profile";

import Bottomnav from "../Components/Mobile/Bottomnav";
export default function Mobileroutes() {
  const Root = styled("div")(({ theme }) => ({
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));
  return (
    <Root>
      <Navbar />
      <Grid pt={10}>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/Quote" element={<Quotedetail />} />
      <Route path="/profile" element={<Profile/>} />
      </Routes>
      </Grid>
      <Bottomnav />
    </Root>
  );
}
