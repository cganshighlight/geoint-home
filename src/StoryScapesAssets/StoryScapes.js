import React from "react";
import StoryScapesPu from './StoryScapesPu';

 export default class StoryScapes extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b58c96b0f3dc0014cd112b" />
                </div>
                <div className="col-xs col-md-10">
                    <div className="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>StoryScapes&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                             <StoryScapesPu />
                        </div>
                    </div>
                        <p>
                        Collaborative platform where everyone in the NSG can edit their collective insights in to an living atlas of change.
                        </p>
                </div>
            </div>
        );
    }
}