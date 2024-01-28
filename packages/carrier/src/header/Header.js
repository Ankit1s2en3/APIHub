import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Avatar, IconButton } from '@material-ui/core';
import carrier from '../assets/carrier_icon.png';
import LoginModal from '../components/loginModal/loginModal';
const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom:'1px solid black'
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    marginRight: theme.spacing(2),
  },
  homeIcon: {
    // marginRight: theme.spacing(2),
    backgroundColor: '#fff',
    padding: theme.spacing(0),
  },
  ovalImage: {
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    borderRadius: "50%",
    backgroundImage: carrier,
    backgroundSize: "cover",
  },
}));
const handleNavigate = (url) => {
  window.location.href = url;
};
function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <LoginModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <AppBar position="static" color="white">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
           <img src={carrier} alt="carrier" width="90" height="60" style={{borderRadius: "80%"}} />
           <div className={classes.ovalImage}></div>
          </Typography>
          <Button color="inherit" className={classes.navButton} onClick={() => handleNavigate('#/dashboard')}>Home</Button>
          <Button color="inherit" className={classes.navButton} onClick={() => handleNavigate('#/apps')}>APIs</Button>
          <Button color="inherit" className={classes.navButton} onClick={() => handleNavigate('#/dashboard')}>Get Started</Button>
          <Button color="inherit" onClick={() => {
            // handleNavigate('#/dashboard')
            handleOpen()
            }}>Sign In</Button>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;