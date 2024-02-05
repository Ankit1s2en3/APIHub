import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import {  useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom:'1px solid black',
    height:"70px",
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    marginRight: theme.spacing(2),
    background:"#567b95;"
  },
  homeIcon: {
    // marginRight: theme.spacing(2),
    backgroundColor: '#fff',
    padding: theme.spacing(0),
  },
 
}));
const handleNavigate = (url) => {
  window.location.href = url;
};


function SubHeader() {
  const classes = useStyles();
  var location = useLocation().pathname.split('/');
  console.log(location.includes("swagger"))
  const swaggerDownload = (location) =>{
    if(location.includes("swagger")){
      return (<><Button color="inherit" variant="contained" className={classes.navButton} onClick={() => handleNavigate('#/dashboard')}>Download Specs</Button>
      <Button color="inherit" variant="contained" className={classes.navButton} onClick={() => handleNavigate('#/apps')}>Authorize</Button></>)
    }
      return <></>
    }
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {location[location.length-1].toUpperCase()}
          </Typography>
          {swaggerDownload(location)}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SubHeader;