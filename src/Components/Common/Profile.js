import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProfileUser from "./ProfileUser";
import Quote from "./Quote";
export default function Profile() {
  const arr = [0, 1, 2, 3, 4, 5, 6];
  return (
    <Container maxWidth="sm" px={3}>
      <ProfileUser />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {arr.map((e) => {
          return (
            <Grid px={1} pt={3} sm={6}>
              <Quote key={e} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
