import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
export default function ProfileUser() {
  return (
    <>
      <Grid container>
        <Grid container item xs={2}>
          <Avatar
            sx={{ bgcolor: "primary.main", width: 75, height: 75 }}
            aria-label="Aj bishnoi"
          >
            Aj
          </Avatar>
        </Grid>
        <Grid pl={3} container item xs={7} alignItems="center">
          <Typography variant="h5">Ajbishnoi3</Typography>
        </Grid>
        <Grid container item xs={1} justifyContent="center">
          <Typography variant="h5" textAlign="center" mt={1} color="primary">
            7
          </Typography>
          <Typography textAlign="center" variant="h6">
            Posts
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h6" pt={1}>
        Abhishek Bishnoi
      </Typography>
      <Grid pt={1}>
        <Typography variant="body1" align="justify">
          dolor sint nisi magna consequat commodo eiusmod qui proident enim
          proident tempor deserunt nulla voluptate pariatur mollit eu
          reprehenderit fugiat ut do velit eiusmod aliqua irure adipisicing quis
          consectetur id deserunt ea do
        </Typography>
      </Grid>
      <Grid container justifyContent="center"></Grid>
      <Grid pt={3} container justifyContent="center">
        <Grid item xs={6} pr={1}>
          <Button fullWidth variant="outlined">
            Edit Profile
          </Button>
        </Grid>
        <Grid item xs={6} pl={1}>
          <Button fullWidth variant="outlined">
            Share Profile
          </Button>
        </Grid>
      </Grid>
      <Typography color="primary" variant="h5" pt={2} pb={1}>
        Quotes
      </Typography>
      <Divider />
    </>
  );
}
