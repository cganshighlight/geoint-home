import React from "react";

 export default class SonarQube extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b86dea55b33d000e8b3f0a" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <h2>SonarQube</h2>
                    </div>
                        <p>
                        SonarQube is an open platform to manage code quality.
                        </p>
                </div>
            </div>
        );
    }
}