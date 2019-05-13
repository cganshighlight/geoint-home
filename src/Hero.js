import React from "react";
import Button from '@material-ui/core/Button';

export class Hero extends React.Component{
    render(){
        return(
            <div class="jumbotron jumbotron-fluid">
                <div className="account-navbar">
                    <div class="container">
                                <img className="mx-auto d-block img-fluid" src="https://home.geointservices.io/images/GS-white-dev.png" />
                        
                                <p className="text-center hero-text">Development and Integration Enviornment</p>
                         
                        <div className="row">
                            <div className="hero-button">
                                <Button variant="outlined">Learn More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}