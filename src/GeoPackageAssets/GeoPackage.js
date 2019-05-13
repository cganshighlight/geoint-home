import React from "react";
import GeoPackagePu from './GeoPackagePu';

 export default class GeoPackage extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b4a6feb0f3dc0014cd110a" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>GeoPackage&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                             <GeoPackagePu />
                        </div>
                    </div>
                        <p>
                        An SDK that provides the ability to manage GeoPackage files providing read, write, import, export, share, and open support.
                        </p>
                </div>
            </div>
        );
    }
}