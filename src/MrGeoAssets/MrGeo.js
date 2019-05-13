import React from "react";
import MrGeoPu from './MrGeoPu';

 export default class MrGeo extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b58a67b0f3dc0014cd111f" />
                </div>
                <div className="col-xs col-md-10">
                    <div className="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>MrGeo&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                             <MrGeoPu />
                        </div>
                    </div>
                        <p>
                        MrGeo enables global geospatial big data image processing and analytics.
                        </p>
                </div>
            </div>
        );
    }
}