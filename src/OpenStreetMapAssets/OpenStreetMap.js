import React from "react";
import OpenStreetMapPu from './OpenStreetMapPu';

 export default class OpenStreetMap extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b58b87b0f3dc0014cd1125" />
                </div>
                <div className="col-xs col-md-10">
                    <div className="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>OpenStreetMap&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                             <OpenStreetMapPu />
                        </div>
                    </div>
                        <p>
                        GEOINT Services' hosted instance of OpenStreetMap, the free editable map of the whole world. The map data is updated regularly.
                        </p>
                </div>
            </div>
        );
    }
}