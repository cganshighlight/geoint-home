import React from "react";
import CrunchyPu from './CrunchyPu';

 export default class Crunchy extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b5cbd7b0f3dc0014cd114c" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>PostgreSQL DBaaS from Crunchy Data Solutions&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                            <CrunchyPu />
                        </div>
                    </div>
                        <p>
                        Easily deploy a PostgreSQL Database-as-a-Service within a Pivotal Cloud Foundry (PCF) environment through a PCF Service Tile.
                        </p>
                </div>
            </div>
        );
    }
}