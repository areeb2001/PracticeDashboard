import { makeStyles } from "@mui/styles";
export default makeStyles({
    mainbox:{
        display: "flex",
        flexDirection: "row",
        marginLeft: "200px",
        width: "85.5%",
        marginBottom:'20px',
        '@media (max-width:1100px)':{
            width:'80%',
            flexDirection:'column'
        },
        '@media (max-width:650px)':{
            width:'70%',
            flexDirection:'column'
        },
        '@media (max-width:400px)':{
            width:'70%',
            flexDirection:'column'
        }
    },
    boxa:{
        display: "flex",
        height: "500px",
        width: "76%",
        flexDirection: "column",
        marginTop:'10px',
        '@media (max-width:1100px)':{
            width:'98%',
            flexDirection:'column'
        },
        '@media (max-width:650px)':{
            width:'90%',
            flexDirection:'column'
        }
    },
    boxb:{
        display:'flex',
        height: "500px",
        width: "20%",
        flexDirection: "column",
        marginLeft: "20px",
        gap:'30px',
        marginTop:'10px',
        marginBottom:'10px',
        '@media (max-width:1100px)':{
            width:'50%',
            flexDirection:'column',
            marginLeft: "0px",
        },
        '@media (max-width:650px)':{
            width:'80%',
            flexDirection:'column',
            marginLeft: "0px",
        }

    },
    details:{
        display: "flex",
         marginLeft: "200px",
          marginTop: "80px",
          '@media (max-width:650px)':{
            width:'30%',
            flexDirection:'column',
            marginleft:'20px',
            // marginLeft: "0px",
        }
    },
    buttonyearly:{
        display: "flex",
         marginLeft: "60%",
         '@media (max-width:650px)':{
            width:'100%',
            flexDirection:'column',
            // marginLeft: "0px",
            marginLeft: "0%",
        },
        '@media (max-width:400px)':{
            width:'100%',
            flexDirection:'column',
            // marginLeft: "0px",
        }
    }
})