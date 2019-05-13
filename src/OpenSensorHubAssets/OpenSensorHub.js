import React from "react";
import OpenSensorHubPu from './OpenSensorHubPu';

 export default class OpenSensorHub extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b58ad4b0f3dc0014cd1122" />
                </div>
                <div className="col-xs col-md-10">
                    <div className="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>OpenSensorHub&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                             <OpenSensorHubPu />
                        </div>
                    </div>
                        <p>
                        A software platform to support virtually any sensor, actuator, or process through the deployment of distributed, interactive sensor hubs.
                        </p>
                </div>
            </div>
        );
    }
}