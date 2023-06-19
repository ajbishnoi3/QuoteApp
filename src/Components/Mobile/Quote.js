import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
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
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import IconButton from '@mui/material/IconButton';
export default function Quote() {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="Aj bishnoi">
                Aj
              </Avatar>
            }
            title="Ajbishnoi3"
          />
          <Divider />
          <CardContent>
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
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                sx={{
                  "&.Mui-checked": {
                    color: red[500],
                  },
                }}
              />
              <IconButton aria-label="delete">
  <MapsUgcRoundedIcon/>
</IconButton>
              <Checkbox
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
                sx={{
                  "&.Mui-checked": {
                    color: red[500],
                  },
                }}
              />
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
