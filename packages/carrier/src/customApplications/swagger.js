import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import pic_data from "../pic_data.json"
import pim_data from "../pim_data.json"
function Swagger(){
    const currentURL = window.location.href;

    // Parse the URL to extract path parameters
    const urlParts = currentURL.split('/');
    const paramValue = urlParts[urlParts.length - 1];
    switch (paramValue){
        case "pic":
            return <SwaggerUI spec={pic_data} />
        case "pim":
            return <SwaggerUI spec={pim_data} />
        default:
            return <SwaggerUI spec={pic_data} />
    
    }

}

export default Swagger;