import Typography from '@material-ui/core/Typography';

function Overview(props){
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

export default Overview;