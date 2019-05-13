import React from "react";
import MagePu from './MagePu';

 export default class Mage extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b58986b0f3dc0014cd1119" />
                </div>
                <div className="col-xs col-md-10">
                    <div className="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>Mage&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                             <MagePu />
                        </div>
                    </div>
                        <p>
                        Rapidly deploy a mobile situational awareness capability in secure environments; that supports low-bandwidth and disconnected users.
                        </p>
                </div>
            </div>
        );
    }
}