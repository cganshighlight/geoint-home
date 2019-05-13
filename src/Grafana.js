import React from "react";

 export default class Grafana extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58c2f6a18674c60014e46e54" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <h2>Grafana</h2>
                    </div>
                        <p>
                        Grafana is the leading graph and dashboard builder for visualizing time series metrics.
                        </p>
                </div>
            </div>
        );
    }
}