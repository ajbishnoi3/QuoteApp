import * as React from "react";
import { useMatch, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function BottomNav() {
  const navigate = useNavigate();
  const matchHome = useMatch("/");
  const matchSearch = useMatch("/search");
  const matchAdd = useMatch("/add");
  const matchSave = useMatch("/save");
  const matchProfile = useMatch("/profile");
  const gotoHome = ()=>{
    navigate("/")
  }
  const gotoSearch=()=>{
    navigate("/search")
  }
  const gotoAdd=()=>{
    navigate("/add")
  }
  const gotoSave=()=>{
    navigate("/save")
  }
  const gotoProfile=()=>{
    navigate("/profile")
  }
  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        sx={{
          bgcolor: "mycolor.main",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation sx={{ bgcolor:"mycolor.main" }}>
          {matchHome ? (
            <BottomNavigationAction
             onClick={gotoHome} icon={
                <HomeIcon
                  fontSize="large"
                  sx={{ color: "primary.main", fontSize: 45 }}
                />
              }
            />
          ) : (
            <BottomNavigationAction
             onClick={gotoHome} icon={
                <HomeOutlinedIcon fontSize="large" sx={{ color: "primary.main" }} />
              }
            />
          )}
          {matchSearch ? (
            <BottomNavigationAction
             onClick={gotoSearch} icon={
                <YoutubeSearchedForIcon
                  sx={{ color: "primary.main", fontSize: 45 }}
                />
              }
            />
          ) : (
            <BottomNavigationAction
            onClick={gotoSearch}  icon={
                <SearchOutlinedIcon fontSize="large" sx={{ color: "primary.main" }} />
              }
            />
          )}
          {matchAdd ? (
            <BottomNavigationAction
            onClick={gotoAdd}  icon={
                <AddCircleIcon
                  fontSize="large"
                  sx={{ color: "primary.main", fontSize: 45 }}
                />
              }
            />
          ) : (
            <BottomNavigationAction
            onClick={gotoAdd}  icon={
                <AddCircleOutlineOutlinedIcon
                  fontSize="large"
                  sx={{ color: "primary.main" }}
                />
              }
            />
          )}

          {matchSave ? (
            <BottomNavigationAction
             onClick={gotoSave} icon={
                <BookmarkIcon
                  fontSize="large"
                  sx={{ color: "primary.main", fontSize: 45 }}
                />
              }
            />
          ) : (
            <BottomNavigationAction
             onClick={gotoSave} icon={
                <BookmarkBorderIcon fontSize="large" sx={{ color: "primary.main" }} />
              }
            />
          )}
          {matchProfile ? (
            <BottomNavigationAction
            onClick={gotoProfile}  icon={
                <PersonIcon
                  fontSize="large"
                  sx={{ color: "primary.main", fontSize: 45 }}
                />
              }
            />
          ) : (
            <BottomNavigationAction
             onClick={gotoProfile} icon={
                <PersonOutlineIcon fontSize="large" sx={{ color: "primary.main" }} />
              }
            />
          )}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
