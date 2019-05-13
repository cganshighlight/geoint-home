import React from "react";
import BoundlessSuiteSass from './BoundlessSuiteAssets/BoundlessSuiteSass.scss';

 export default class ExpeditedFieldCapability extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid subdued-image" src="https://home.geointservices.io/files/58c2d85a170cf9000e666b89" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <h2 className="subdued-title">Expedited Field Capability</h2>
                    </div>
                        <p className="subdued-paragraph">
                        A real-time app for collecting web configured forms (online and offline) and synchronizing the associated data back into the enterprise.
                        </p>
                </div>
            </div>
        );
    }
}