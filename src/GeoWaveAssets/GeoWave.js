import React from "react";
import GeoWavePu from './GeoWavePu';

 export default class GeoWave extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/5914b39f24de2b0014177906" />
                </div>
                <div className="col-xs col-md-10">
                    <div className="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>GeoWave&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                             <GeoWavePu />
                        </div>
                    </div>
                        <p>
                        GeoWave brings the scalability of key-value stores to modern geospatial software to store, retrieve and analyze massive geospatial datasets
                        </p>
                </div>
            </div>
        );
    }
}