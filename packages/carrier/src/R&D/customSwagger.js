import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

function CustomSwagger(props){
    const NeverShowInfoPlugin = function(system) {
        console.log('system data : ',system.getComponents());
        return {
          components: {
            info: () => null,
            // Models: () => null,
            // Logo: () => null,
            operations: () => null,
          },
          wrapComponents: {
            info: (Original, system) => (props) => {
                console.log('info props :>',props)
                let newProps = {...props}
                newProps.basePath = "/test"
                console.log(newProps.info._list._tail.array)
                newProps.info._list._tail.array[1][1] = "XYZ"
              return <>
                <h3>Hello world! I am above the Info component.</h3>
                <Original {...newProps} />
                </>
            },
            Models: (Original, system) => (props) => {
            let newProps = {...props}
            newProps.getConfigs = () => ({
              defaultModelRendering: "model",
              defaultModelExpandDepth: 1
            })
            console.log('model props :>',props)
              return <>
                <h3>test models</h3>
                <Original {...newProps} />
              </>
            },
            operations:(Original,system) => (props) => {
            let newProps = {...props}
            // newProps.state._root.entries[1][1]._root.entries[3][1]._list._tail.array[3][1]._tail.array = []
            // console.log('tags :> ',newProps.state._root.entries[1][1]._root.entries[3][1]._list._tail.array[3][1]._tail.array)
            console.log('operations props :>',props)
              return <>
                <h3>test Operations</h3>
                <Original {...newProps} />
              </>
            }
          }
        }
      }
    return <SwaggerUI 
            spec={props.specsData} 
            plugins={NeverShowInfoPlugin} 
            // docExpansion="full" 
            defaultModelExpandDepth={2}
            />
}

export default CustomSwagger;