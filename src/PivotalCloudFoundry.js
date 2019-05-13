import React from "react";

 export default class PivotalCloudFoundry extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b5e68db0f3dc0014cd116e" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <h2>Pivotal Cloud Foundry</h2>
                    </div>
                        <p>
                        An open source highly customizable PaaS that developers can use to build, deploy, run and scale applications.
                        </p>
                </div>
            </div>
        );
    }
}