import React from "react";

 export default class SelfService extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b5e810b0f3dc0014cd1175" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <h2>Self Service</h2>
                    </div>
                        <p>
                        Request access to GEOINT Services DevOps Tools.
                        </p>
                </div>
            </div>
        );
    }
}