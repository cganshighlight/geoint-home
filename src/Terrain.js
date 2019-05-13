import React from "react";
import BoundlessSuiteSass from './BoundlessSuiteAssets/BoundlessSuiteSass.scss';

 export default class Terrain extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid subdued-image" src="https://home.geointservices.io/files/58b58d18b0f3dc0014cd112e" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <h2 className="subdued-title">Terrain</h2>
                    </div>
                        <p className="subdued-paragraph">
                        A high performance terrain analysis system that enables you to perform interactive analytics on terrain models and raster data.
                        </p>
                </div>
            </div>
        );
    }
}