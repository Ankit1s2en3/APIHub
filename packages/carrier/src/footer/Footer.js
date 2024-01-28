import React from 'react';
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'auto',  // Push the footer to the bottom of the viewport
    minHeight:'4px'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center', // Align items to the center
  },
  navButton: {
    margin: theme.spacing(0, 1),  // Add equal spacing between buttons
  }
}));

function Footer() {
  const classes = useStyles();
  const handleNavigate = (url) => {
    window.location.href = url;
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar className={classes.toolbar}>
          <Button color="inherit" className={classes.navButton} onClick={() => handleNavigate('#/dashboard')}>Home</Button>
          <Button color="inherit" className={classes.navButton} onClick={() => handleNavigate('#/apps')}>APIs</Button>
          <Button color="inherit" className={classes.navButton} onClick={() => handleNavigate('#/dashboard')}>Terms of Service</Button>
          <Button color="inherit" className={classes.navButton} onClick={() => handleNavigate('#/dashboard')}>Branding</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Footer;
