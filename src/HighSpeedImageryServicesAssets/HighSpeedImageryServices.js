import React from "react";
import HighSpeedImageryServicesPu from './HighSpeedImageryServicespu';

 export default class HighSpeedImageryServices extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58c1f1ae170cf9000e666b77" />
                </div>
                <div className="col-xs col-md-10">
                    <div className="row justify-content-center justify-content-md-start">
                        <div className="col-10 col-md-7 no-mobile-pad no-pad-right">
                            <h2>High Speed Imagery Services&nbsp;</h2>
                        </div>
                        <div className="col-1 float-left no-mobile-pad no-pad-left">
                             <HighSpeedImageryServicesPu />
                        </div>
                    </div>
                        <p>
                        HiPER LOOK provides applications and algorithms with fast and efficient access to massive quantities of geospatial data.
                        </p>
                </div>
            </div>
        );
    }
}