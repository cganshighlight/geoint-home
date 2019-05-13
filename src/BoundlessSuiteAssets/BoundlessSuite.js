import React from "react";
import BoundlessSuiteSass from './BoundlessSuiteSass.scss';

 export default class BoundlessSuite extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid subdued-image" src="https://home.geointservices.io/files/58b58dafb0f3dc0014cd1131" />
                </div>
                <div className="col-xs col-md-10">
                        <h2 className="subdued-title">Boundless Suite</h2>
                        <p className="subdued-paragraph">
                        A complete geospatial platform for managing data and building maps and applications across web browsers, desktops, and mobile devices.
                        </p>
                </div>
            </div>
        );
    }
}