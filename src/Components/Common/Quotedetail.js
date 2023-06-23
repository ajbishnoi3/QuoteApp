import React from "react";
import Grid from "@mui/material/Grid";
import Quote from "./Quote";
import QuoteTab from "./QuoteTab";
export default function Quotedetail() {
  return (
    <Grid container justifyContent="center"
    px={3} >
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6} pr={1}>
      <Quote />
      </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} pl={1}>
      <QuoteTab/>
    </Grid>
    </Grid>
  );
}
