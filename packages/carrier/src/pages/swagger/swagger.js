import React,{useState} from 'react';
import "swagger-ui-react/swagger-ui.css"
import pic_data from "../../pic_data.json"
import pim_data from "../../pim_data.json"
import login_data from "../../loginapi.json"
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SidebarSwager from '../../components/swagger/swaggerSidebar/sidebarSwagger';
import { useAuth } from '../../context/authContext';
import CustomSwagger from '../../components/swagger/customSwagger/customSwagger';
import Overview from '../../components/swagger/overview/overview';


const swaggerMain = (content,paramValue)=>{
  switch(content){
    case "content":
      return <CustomSwagger specsData = {pic_data} />
    case "overview":
      return <Overview />
    default:
      return <>Modal</>
  }
}


function Swagger(){
    const currentURL = window.location.href;

    // Parse the URL to extract path parameters
    const urlParts = currentURL.split('/');
    const paramValue = urlParts[urlParts.length - 1];
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
                <SidebarSwager specsData = {pic_data} />
              </Paper>
            </Grid>
            <Grid key={2} item>
              <Paper className={classes.paper_content} >
                {swaggerMain(swaggerContent,paramValue)}
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
    </>

}

export default Swagger;