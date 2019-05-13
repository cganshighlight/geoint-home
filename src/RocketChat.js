import React from "react";

 export default class RocketChat extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58c2d94d170cf9000e666b8f" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <h2>Rocket.Chat</h2>
                    </div>

                        <p>
                        A Slack-like chat tool built with Meteor.
                        </p>

                </div>
            </div>
        );
    }
}