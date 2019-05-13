import React from "react";
import GeoGigPu from './GeoGigPu';

 export default class GeointAppStore extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58c2f59b8674c60014e46e51" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>GeoGig&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                            <GeoGigPu />
                        </div>
                    </div>
                        <p>
                        An open source tool that draws inspiration from Git, but adapts its core concepts to handle distributed versioning of geospatial data.
                        </p>
                </div>
            </div>
        );
    }
}