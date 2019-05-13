import React from "react";

 export default class Apigee extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid subdued-image" src="https://home.geointservices.io/files/58b8734c55b33d000e8b3f0e" />
                </div>
                <div className="col-xs col-md-10">
                    <div className="row justify-content-center justify-content-md-start">
                        <h2 className="subdued-title">Apigee</h2>
                    </div>
                        <p className="subdued-paragraph">
                        Easily create and deploy API proxies in the cloud from your Open API (Swagger) specs.
                        </p>
                </div>
            </div>
        );
    }
}