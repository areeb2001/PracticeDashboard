"use client";
import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import Styles from "./stylesheet";
import BlindsClosedIcon from "@mui/icons-material/BlindsClosed";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import GroupIcon from "@mui/icons-material/Group";


const DashboardSummary = () => {

  const classes = Styles();
  return (
    <Box className={classes.dashboardsummary}>
      <Box style={{backgroundColor:'#7450dc'}} className={classes.summarybox}>
        <Avatar className={classes.boxicon} style={{backgroundColor:'#7450dc'}}>
          <BlindsClosedIcon style={{backgroundColor:'#7450dc'}}  />
        </Avatar>
        <Box >
          <Typography style={{ fontSize: "12px", color: "black" }}></Typography>
        </Box>
        <Box style={{ fontSize: "12px", color: "black" }}>
          <Typography></Typography>
        </Box>
      </Box>
      <Box className={classes.summarybox}>
        <Avatar className={classes.boxicon}>
          <LocalOfferIcon />
        </Avatar>
        <Box style={{ fontSize: "12px", color: "black" }}>
          {/* <p>{item.count}</p> */}
        </Box>
        <Box style={{ fontSize: "12px", color: "black" }}>
          <Typography></Typography>
        </Box>
      </Box>
      <Box className={classes.summarybox}>
        <Avatar className={classes.boxicon}>
          <ShoppingBagIcon />
        </Avatar>
        <Box style={{ fontSize: "12px", color: "black" }}>
          {/* <p>{item.count}</p> */}
        </Box>
        <Box style={{ fontSize: "12px", color: "black" }}>
          <Typography></Typography>
        </Box>
      </Box>
      <Box className={classes.summarybox}>
        <Avatar className={classes.boxicon}>
          <GroupIcon />
        </Avatar>
        <Box style={{ fontSize: "12px", color: "black" }}>
          {/* <p>{item.count}</p> */}
        </Box>
        <Box style={{ fontSize: "12px", color: "black" }}>
          <Typography></Typography>
        </Box>
      </Box>
      {/* ))} */}
    </Box>
  );
};

export default DashboardSummary;
