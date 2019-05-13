import React from "react";

 export default class Uchiwa extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b8715855b33d000e8b3f0c" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <h2>Uchiwa</h2>
                    </div>
                        <p>
                        Uchiwa is a simple dashboard for the Sensu monitoring framework, built with Go and AngularJS.
                        </p>
                </div>
            </div>
        );
    }
}