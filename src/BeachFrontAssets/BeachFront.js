import React from "react";
import BeachFrontPu from './BeachFrontPu';

 export default class BeachFront extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b47d53b0f3dc0014cd10fd" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>Beachfront&nbsp;</h2>
                            </div>
                            <div className="col-xs-1">
                            <BeachFrontPu />
                        </div>
                    </div>
                        <p>
                        An open source project that allows users to automatically generate coastline vector data from 3rd party satellite imagery providers.
                        </p>
                </div>
            </div>
        );
    }
}