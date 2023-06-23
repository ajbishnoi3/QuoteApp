import React from "react";
import { useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";

export default function ColorTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
            variant="fullWidth"
             centered>
            <Tab value="1" icon={<FavoriteBorder />} iconPosition="start" label="likes" />
            <Tab value="2" icon={<MapsUgcRoundedIcon />} iconPosition="start" label="comments" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}
