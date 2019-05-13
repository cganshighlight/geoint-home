import React from "react";

 export default class Jenkins extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b5dc4bb0f3dc0014cd1168" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <h2>Jenkins</h2>
                    </div>
                        <p>
                        Jenkins is an open source tool providing continuous integration services for software development.
                        </p>
                </div>
            </div>
        );
    }
}