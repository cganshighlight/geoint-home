import React from "react";
import GeointAppStorePu from './GeointAppStorePu';

 export default class GeointAppStore extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/59b83bdf7a5fec000ec1353d" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>GEOINT App Store&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                            <GeointAppStorePu />
                        </div>
                    </div>
                        <p>
                        Optimizing the enterprise-wide delivery of GEOINT apps to the DoD and IC.
                        </p>
                </div>
            </div>
        );
    }
}