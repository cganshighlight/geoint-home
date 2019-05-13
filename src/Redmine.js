import React from "react";

 export default class Redmine extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b5e7adb0f3dc0014cd1172" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <h2>Redmine</h2>
                    </div>
                        <p>
                        A free and open source, web-based project management and issue tracking tool.
                        </p>
                </div>
            </div>
        );
    }
}