import React,{useState} from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import pic_data from "../pic_data.json"
import pim_data from "../pim_data.json"
import login_data from "../loginapi.json"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SidebarSwager from '../components/swaggerSidebar/sidebarSwagger';
import { useAuth } from '../context/authContext';
import Typography from '@material-ui/core/Typography';
import CustomSwagger from '../components/customSwagger/customSwagger';

const swaggerSider = (paramValue)=>{

        switch (paramValue){
         case "pic":
            return <CustomSwagger specsData = {pic_data} />
         case "pim":
            return <CustomSwagger specsData = {pim_data} />
         case "login":
            return <CustomSwagger specsData = {login_data} />
         default:
            return <CustomSwagger specsData = {login_data} />
            }
}

const overview = ()=>{
  return <>
    <Typography variant="h5" style={{paddingLeft:"1rem",paddingTop:"2rem"}}>
    Login Overview
    </Typography>
    <Typography variant="subtitle1" style={{paddingLeft:"1rem",paddingRight:"1rem"}}>
        This API provides the access to logg into the API hub. It's the basic requirement
        to set up the react application into the api hub. It works on the vatous features
        like tokes. Client creds and client key is mandatory here. Further will be discussed
        below.
    </Typography>
    <Typography variant="h6" style={{paddingLeft:"1rem",paddingTop:"2rem"}}>
        Sevices list
    </Typography>
    <Typography variant="subtitle1" style={{paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"1rem"}}>
        It have various Sevices like OTK Authorize, Portal Application, OTK Token,
        OTK Openid Connect to get into the portal and start logging into the application.
    </Typography>
    <Typography variant="subtitle1" style={{paddingLeft:"1rem",paddingRight:"1rem"}}>
        /application/tenantId
    </Typography>
    <Typography variant="subtitle1" style={{paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"1rem"}}>
        It is used to get application access using the tannent ID. You need to enable it in the API Hub.
    </Typography>
    <Typography variant="subtitle1" style={{paddingLeft:"1rem",paddingRight:"1rem"}}>
        /auth/oauth/v2/authorize
    </Typography>
    <Typography variant="subtitle1" style={{paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"1rem"}}>
        It is used to get application access using the Oauth Token. You need to have client ID and
        Client Secret from Mager/proxies.
    </Typography>
    <Typography variant="subtitle1" style={{paddingLeft:"1rem",paddingRight:"1rem"}}>
        /auth/oauth/v2/token/revoke
    </Typography>
    <Typography variant="subtitle1" style={{paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"1rem"}}>
        It is used to get application access using the Oauth Token. You need to have client ID and
        Client Secret from Mager/proxies.
    </Typography>
  </>
}
const swaggerMain = (content,paramValue)=>{
  switch(content){
    case "content":
      return swaggerSider(paramValue);
    case "overview":
      return overview()
    default:
      return <>Modal</>
  }
}

const leftContent = ()=>{

    return <>
      <SidebarSwager />
    </>
}
function Swagger(){
    const currentURL = window.location.href;

    // Parse the URL to extract path parameters
    const urlParts = currentURL.split('/');
    const paramValue = urlParts[urlParts.length - 1];
    console.log(paramValue);
    const {swaggerContent,setSwaggerContent} = useAuth()

    const useStyles = makeStyles((theme) => ({
        root: {
        //   flexGrow: 1,
        },
        paper_left: {
          height: 530,
          width: 270,
          overflow:"auto",
        },
        paper_content: {
            height: 530,
            width: 950,
            overflow:"auto",
          },
        control: {
          padding: theme.spacing(0),
        },
      }));
    const [spacing, setSpacing] = React.useState(2);

    const classes = useStyles();
  

    return <>
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
            <Grid key={1} item>
              <Paper className={classes.paper_left} >
                {leftContent()}
              </Paper>
            </Grid>
            <Grid key={2} item>
              <Paper className={classes.paper_content} >
                {/* {swaggerSider("login")} */}
                {swaggerMain(swaggerContent,paramValue)}
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
    </>

}

export default Swagger;