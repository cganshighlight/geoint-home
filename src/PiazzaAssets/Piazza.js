import React from "react";
import PiazzaPu from './PiazzaPu';

 export default class Piazza extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b5cb55b0f3dc0014cd1149" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>Piazza&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                            <PiazzaPu />
                        </div>
                    </div>
                        <p>
                        Piazza is a set of open source, cloud-based services aimed at helping developers build GEOINT applications and services.
                        </p>
                </div>
            </div>
        );
    }
}