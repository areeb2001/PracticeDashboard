'use client'
import DashboardSummary from "@/components/dashboardSummary/DashboardSummary";
import Navbar from "@/components/navbar/Navbar";
import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import './my.css'
import Styles from "./stylesheet";
export default function Home() {
  const classes = Styles();
  return (
    <>
      <Box style={{ display: "inline" }}>
        <Navbar />
      </Box>
      <Box className={classes.details}>
        <Box>
          <Typography style={{ fontSize: "25px", fontWeight: "600" }}>
            Hey Olivia
          </Typography>
          <Typography style={{ color: "#939393" }}>
            here what happening witth your store today
          </Typography>
        </Box>
        <Box className={classes.buttonyearly}>
          <Button
            className={ classes.wrapyearlybutton}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Yearly
          </Button>
        </Box>
      </Box>
      <Box className={classes.wrapdashboardsummary}marginTop={1}>
        <DashboardSummary />
      </Box>
      <Box 
      className={classes.mainbox}
      >
        <Box 
        className={classes.boxa}
        >
          <Box
           className={classes.boxa1}
          >
          </Box>
          <Box
            className={classes.boxa1}
          ></Box>
        </Box>
        <Box 
        className={classes.boxb}
        >
          <Box className={classes.boxb1}>
          </Box>
          <Box className={classes.boxb1}>
          </Box>
          <Box className={classes.boxb1}>
          </Box>
        </Box>
      </Box>
    </>
  );
}
