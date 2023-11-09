import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import { Card, Typography , Button} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Book from "@material-ui/icons/Book";
import ChatIcon from '@material-ui/icons/Chat';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-admin';

const useStyles = makeStyles((theme) => ({
    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // width: '100%',
        // backgroundColor: '#f4f4f4', // Light gray background to give contrast to the content cards
        // maxHeight: '100vh',
        // minHeight: '87vh',
        // padding: theme.spacing(0),
        justifyContent: 'center', 
      },
    bannerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        width: '100%',
        height: '400px', // Or adjust to your desired height
        backgroundImage: "url('path-to-your-background-image.jpg')", // Add your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#262684', // Adds a dark overlay
        color: '#fff',
      },
      bannerTitle: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
      },
      bannerSubtitle: {
        marginBottom: theme.spacing(3),
      },
      getStartedButton: {
        backgroundColor: '#fff',
        color: '#000',
        '&:hover': {
          backgroundColor: '#f8f8f8',
        },
      },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#f4f4f4', // Light gray background to give contrast to the content cards
    maxHeight: '100vh',
    minHeight: '45vh',
    padding: theme.spacing(0),
    justifyContent: 'center', 
  },
  contentCard: {
    cursor: "pointer",
    alignItems: 'center',
    padding: theme.spacing(4),
    margin: theme.spacing(2),
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    boxShadow: theme.shadows[3],
    '& h4': {
      marginBottom: theme.spacing(4),
      font: 'bold 24px/32px Helvetica, Arial, sans-serif',
    },
    '& body1': {
        margin: theme.spacing(4),
        font: 'normal 16px/24px Helvetica, Arial, sans-serif',
        color: '#D3D3D3',

    }

  },
}));


function HomePage(){
    const classes = useStyles();

    return (
    <div className={classes.mainContent}>
               <div className={classes.bannerContainer}>
      <Typography variant="h3" className={classes.bannerTitle}>
        Carrier Developer Network
      </Typography>
      <Typography variant="h5" className={classes.bannerSubtitle}>
        All the APIs Fit to Post
      </Typography>
      <Button variant="contained" className={classes.getStartedButton}>
        GET STARTED
      </Button>
    </div>
      <div className={classes.content}>
 
        {/* Get Started */}
       
        <Card className={classes.contentCard}>
          <Typography variant="h4"><CheckCircleIcon/> Get Started</Typography>
          <Divider orientation="horizontal" />
          <Typography variant="body1">Learn how to sign up for an API key.</Typography>
        </Card>
  
        {/* APIs */}
        <Link to="/apps">
        <Card className={classes.contentCard}>
          <Typography variant="h4"><Book/>APIs</Typography>
          <Divider orientation="horizontal" />
          <Typography variant="body1">Learn about and try out Carriers's APIs.</Typography>
        </Card>
        </Link>
  
        {/* FAQ */}
        <Card className={classes.contentCard}>
          <Typography variant="h4"><ChatIcon/>{" "}FAQ</Typography>
          <Divider orientation="horizontal" />

          <Typography variant="body1">Get answers to frequently asked questions.</Typography>
        </Card>
  
        {/* Branding */}
        <Card className={classes.contentCard}>
          <Typography variant="h4"><BorderColorIcon/>Branding</Typography>
          <Divider orientation="horizontal" />
          <Typography variant="body1">Read about Carrier's branding & attribution requirements.</Typography>
        </Card>
      </div>
      {console.log("hello")}
      </div>
    );
}

export default HomePage;