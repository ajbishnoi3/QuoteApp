import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import IconButton from "@mui/material/IconButton";
export default function Quote() {
  const navigate = useNavigate();
  const gotoQuote = () => {
    navigate("/quote");
  };
  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "primary.main" }} aria-label="Aj bishnoi">
              Aj
            </Avatar>
          }
          title="Ajbishnoi3"
        />
        <Divider />
        <CardContent onClick={gotoQuote}>
          <Grid container direction="column" justifyContent="center">
            <Grid item>
              <Typography variant="body1" align="center">
                "description incididunt id est fugiat incididunt eu ea aliquip
                consectetur excepteur et proident occaecat commodo velit
                voluptate est velit amet excepteur mollit deserunt elit
                consequat do elit do velit do proident"
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                sx={{
                  "&.Mui-checked": {
                    color: "primary.main",
                  },
                }}
              />
              <Typography align="center">0</Typography>
            </Grid>
            <Grid item>
              <IconButton aria-label="delete">
                <MapsUgcRoundedIcon />
              </IconButton>
              <Typography align="center">0</Typography>
            </Grid>
            <Grid item>
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              sx={{
                "&.Mui-checked": {
                  color: "primary.main",
                },
              }}
            />
        
          </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
}
