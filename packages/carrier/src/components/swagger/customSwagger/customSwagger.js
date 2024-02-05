import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

function CustomSwagger(props){
   
    return <SwaggerUI 
            spec={props.specsData} 
            // docExpansion="full" 
            defaultModelExpandDepth={2}
            />
}

export default CustomSwagger;