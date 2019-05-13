import React from "react";
import BoundlessDesktopPu from './BoundlessDesktopPu';

 export default class BoundlessDesktop extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/59110676091b02001339ae18" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>Boundless Desktop&nbsp;</h2>
                            </div>
                            <div className="col-xs-1">
                            <BoundlessDesktopPu />
                        </div>
                    </div>
                        <p>
                        Create, edit, visualize, analyze and publish geospatial information on Windows, Mac, Linux, BSD. Powered by QGIS.
                        </p>
                </div>
            </div>
        );
    }
}