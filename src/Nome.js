import React from "react";
import BoundlessSuiteSass from './BoundlessSuiteAssets/BoundlessSuiteSass.scss';

 export default class Nome extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid subdued-image" src="https://home.geointservices.io/files/58c2d8ae170cf9000e666b8c" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <h2 className="subdued-title">Nome</h2>
                    </div>
                        <p className="subdued-paragraph">
                        NOME is an NGA volunteered geographic information (VGI) operational prototype that enables all NGA customers to contribute their knowledge.
                        </p>
                </div>
            </div>
        );
    }
}