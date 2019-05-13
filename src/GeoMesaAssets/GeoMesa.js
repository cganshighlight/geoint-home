import React from "react";
import GeoMesaPu from './GeoMesaPu';

 export default class GeoMesa extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs col-md-2">
                    <img className="img-fluid" src="https://home.geointservices.io/files/596f64b70bbfdd000ed9925a" />
                </div>
                <div className="col-xs col-md-10">
                    <div class="row justify-content-center justify-content-md-start">
                        <div className="col-xs-11">
                            <h2>GeoMesa&nbsp;</h2>
                        </div>
                        <div className="col-xs-1">
                            <GeoMesaPu />
                        </div>
                    </div>
                        <p>
                        GeoMesa provides rapid ingest, access, and query for streaming and big geospatial data platforms. Integrates with GeoServer and Spark.
                        </p>
                </div>
            </div>
        );
    }
}