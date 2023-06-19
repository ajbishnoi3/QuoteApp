import * as React from "react";
import { red } from "@mui/material/colors";
import { useNavigate, useMatch } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Toolbar from "@mui/material/Toolbar";
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
export default function Deskdrawer() {
  const navigate = useNavigate();
  const matchHome = useMatch("/");
  const matchSearch = useMatch("/search");
  const matchAdd = useMatch("/add");
  const matchSave = useMatch("/save");
  const matchProfile = useMatch("/profile");
  const gotoHome = () => {
    navigate("/");
  };
  const gotoSearch = () => {
    navigate("/search");
  };
  const gotoAdd = () => {
    navigate("/add");
  };
  const gotoSave = () => {
    navigate("/save");
  };
  const gotoProfile = () => {
    navigate("/profile");
  };
  const drawerWidth = 80;
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton onClick={gotoHome}>
            <ListItemIcon>
              {matchHome ? (
                <HomeIcon
                  fontSize="large"
                  sx={{ color: red[500], fontSize: 45 }}
                />
              ) : (
                <HomeOutlinedIcon fontSize="large" sx={{ color: red[500] }} />
              )}
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={gotoSearch}>
            <ListItemIcon>
              {matchSearch ? (
                <YoutubeSearchedForIcon
                  fontSize="large"
                  sx={{ color: red[500], fontSize: 45 }}
                />
              ) : (
                <SearchOutlinedIcon fontSize="large" sx={{ color: red[500] }} />
              )}
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={gotoAdd}>
            <ListItemIcon>
              {matchAdd ? (
                <AddCircleIcon
                  fontSize="large"
                  sx={{ color: red[500], fontSize: 45 }}
                />
              ) : (
                <AddCircleOutlineOutlinedIcon
                  fontSize="large"
                  sx={{ color: red[500] }}
                />
              )}
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={gotoSave}>
            <ListItemIcon>
              {matchSave ? (
                <BookmarkIcon
                  fontSize="large"
                  sx={{ color: red[500], fontSize: 45 }}
                />
              ) : (
                <BookmarkBorderIcon fontSize="large" sx={{ color: red[500] }} />
              )}
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={gotoProfile}>
            <ListItemIcon>
              {matchProfile ? (
                <PersonIcon
                  fontSize="large"
                  sx={{ color: red[500], fontSize: 45 }}
                />
              ) : (
                <PersonOutlineIcon fontSize="large" sx={{ color: red[500] }} />
              )}
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
