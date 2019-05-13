import React from "react";
import EventKitPu from './EventKitPu';

 export default class EventKit extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b49ecab0f3dc0014cd1103" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>EventKit&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                            <EventKitPu />
                        </div>
                    </div>
                        <p>
                        EventKit is a web application intended to help analysts discover, process, and export geospatial data for event response.
                        </p>
                </div>
            </div>
        );
    }
}