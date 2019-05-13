import React from "react";

 export default class SwaggerEditor extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b5e94eb0f3dc0014cd117d" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <h2>Swagger-Editor</h2>
                    </div>
                        <p>
                        With a Swagger-enabled API, you get interactive documentation, client SDK generation and discoverability.
                        </p>
                </div>
            </div>
        );
    }
}