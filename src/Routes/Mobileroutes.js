import { Routes, Route } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Navbar from "../Components/Mobile/Navbar";
import Home from "../Components/Mobile/Home";

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
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Bottomnav />
    </Root>
  );
}
