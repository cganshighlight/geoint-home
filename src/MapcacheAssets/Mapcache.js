import React from "react";
import MapcachePu from './MapcachePu';

 export default class Mapcache extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b589eab0f3dc0014cd111c" />
                </div>
                <div className="col-xs col-md-10">
                    <div className="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>Mapcache&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                             <MapcachePu />
                        </div>
                    </div>
                        <p>
                        Mapcache can pull tiles from a tile server such as Open Street Map and save them for offline use in multiple formats.
                        </p>
                </div>
            </div>
        );
    }
}