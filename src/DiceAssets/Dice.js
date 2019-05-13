import React from "react";
import DicePu from './DicePu';

 export default class Dice extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b9e282caee5e000e3659fe" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>Dice&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                            <DicePu />
                        </div>
                    </div>
                        <p>
                        An app for viewing interactive content created with HTML, CSS, and Javascript on a mobile device without a network connection.
                        </p>
                </div>
            </div>
        );
    }
}