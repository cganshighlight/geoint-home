import React from "react";
import GeoTrellisPu from './GeoTrellisPu';

 export default class GeoTrellis extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b4ab01b0f3dc0014cd1110" />
                </div>
                <div className="col-xs col-md-10">
                    <div className="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>GeoTrellis&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                             <GeoTrellisPu />
                        </div>
                    </div>
                        <p>
                        A geographic data processing engine for high performance applications.
                        </p>
                </div>
            </div>
        );
    }
}