import React from "react";
import GeointServicesExchangePu from './GeointServiceExchangePu';

 export default class GeointServicesExchange extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/58b4af8ab0f3dc0014cd1113" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <div className="col-9 col-md-6 no-mobile-pad">
                            <h2>GEOINT Services Exchange&nbsp;</h2>
                        </div>
                        <div className="col-1 no-mobile-pad">
                            <GeointServicesExchangePu />
                        </div>
                    </div>
                        <p>
                        Discover and contribute geospatial foundation and mission data from across the NSG via tools for service management and content delivery.
                        </p>
                </div>
            </div>
        );
    }
}