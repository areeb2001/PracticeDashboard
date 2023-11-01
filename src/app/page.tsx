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
            style={{
              height: "35px",
              backgroundColor: "white",
              color: "#939393",
              borderRadius: "4px",
              border: "1px black",
            }}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Yearly
          </Button>
        </Box>
      </Box>
      <Box style={{ display: "flex" }} marginTop={1}>
        <DashboardSummary />
      </Box>
      <Box 
      className={classes.mainbox}
        // style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   marginLeft: "200px",
        //   width: "81%",
        //   marginBottom:'20px'
        // }}
      >
        <Box 
        className={classes.boxa}
          // style={{
          //   display: "flex",
          //   height: "500px",
          //   width: "76%",
          //   flexDirection: "column",
          // }}
        >
          <Box
            style={{
              backgroundColor: "white",
              height: "240px",
              marginBottom: "20px",
              width: "100%",
              borderRadius: "5px",
              boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
            }}
          ></Box>
          <Box
            style={{
              backgroundColor: "white",
              height: "240px",
              borderRadius: "5px",
              width: "100%",
              boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
            }}
          ></Box>
        </Box>
        <Box 
        className={classes.boxb}
          // style={{
            
            // display:'flex',
            // height: "500px",
            // width: "20%",
            // flexDirection: "column",
            // marginLeft: "20px",
            // gap:'30px',
            // marginBottom:'10px'
          // }}
        >
          <Box style={{  height: "150px",backgroundColor: "white",boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)", borderRadius: "5px",}}>
          </Box>
          <Box style={{  height: "150px",backgroundColor: "white",boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",  borderRadius: "5px",}}>
          </Box>
          <Box style={{  height: "150px",backgroundColor: "white",boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)", borderRadius: "5px",}}>
          </Box>
        </Box>
      </Box>
    </>
  );
}
