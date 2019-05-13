import React from "react";

 export default class Gitlab extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b5d891b0f3dc0014cd1162" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <h2>Gitlab</h2>
                    </div>
                        <p>
                        A web-based Git repository that offers hosted accounts similar to GitHub, but also allows its software to be used on third-party servers.
                        </p>
                </div>
            </div>
        );
    }
}