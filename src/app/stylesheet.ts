import { makeStyles } from "@mui/styles";
export default makeStyles({
    mainbox: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "200px",
        width: "85.5%",
        marginBottom: '20px',
        '@media (max-width:1100px)': {
            width: '80%',
            flexDirection: 'column'
        },
        '@media (max-width:650px)': {
            width: '70%',
            flexDirection: 'column'
        },
        '@media (max-width:400px)': {
            width: '70%',
            flexDirection: 'column'
        }
    },
    boxa: {
        display: "flex",
        height: "500px",
        width: "76%",
        flexDirection: "column",
        marginTop: '10px',
        '@media (max-width:1100px)': {
            width: '98%',
            flexDirection: 'column'
        },
        '@media (max-width:650px)': {
            width: '90%',
            flexDirection: 'column'
        }
    },
    boxa1: {
        backgroundColor: "white",
        height: "240px",
        marginBottom: "20px",
        width: "100%",
        borderRadius: "5px",
        boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
    },
    boxb: {
        display: 'flex',
        height: "500px",
        width: "20%",
        flexDirection: "column",
        marginLeft: "20px",
        gap: '30px',
        marginTop: '10px',
        marginBottom: '10px',
        '@media (max-width:1100px)': {
            width: '50%',
            flexDirection: 'column',
            marginLeft: "0px",
        },
        '@media (max-width:650px)': {
            width: '80%',
            flexDirection: 'column',
            marginLeft: "0px",
        }

    },
    boxb1: {
        height: "150px",
        backgroundColor: "white",
        boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
        borderRadius: "5px"
    },
    details: {
        display: "flex",
        marginLeft: "200px",
        marginTop: "80px",
        '@media (max-width:650px)': {
            width: '30%',
            flexDirection: 'column',
            marginleft: '20px',
        }
    },
    buttonyearly: {
        display: "flex",
        marginLeft: "60%",
        '@media (max-width:650px)': {
            width: '100%',
            flexDirection: 'column',
            marginLeft: "0%",
        },
        '@media (max-width:400px)': {
            width: '100%',
            flexDirection: 'column',
        }
    },
    wrapdashboardsummary: {
        display: 'flex'
    },
    wrapyearlybutton: {
        height: "35px",
        backgroundColor: "white",
        color: "#939393",
        borderRadius: "4px",
        border: "1px black",
    }
})