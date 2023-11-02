import { makeStyles } from "@mui/styles";
export default makeStyles({
  dashboardsummary: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    marginLeft: '180px',
    gap: '20px',
    padding: '20px',
    marginBottom: '23px',
    marginRight: '0px',
    overflow: 'hidden',
    '@media (max-width:650px)': {
      flexDirection: 'column',
    },
    '@media (max-width:400px)': {
      width: '100%',
      flexDirection: 'column',
    } 
  },

  summarybox: {
    backgroundColor: 'white',
    width: '233px',
    height: '100px',
    // display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    paddingLeft: '13px',
    paddingRight: '0px',
    boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
    '@media (max-width:1100px)': {
      width: '40%',
    },
    '@media (max-width:650px)': {
      width: '70%',
    },
    '@media (max-width:400px)': {
      width: '100%',
    },
  },
  boxicon: {
    fontSize: '40px',
    position: 'absolute',
    top: '10px',
    left: '10px',
  },
  p: {
    marginLeft: '13px'
  },
  boxcontent: {
    color: 'gray',
    fontSize: '18px',
    marginTop: '64px',
  }
})