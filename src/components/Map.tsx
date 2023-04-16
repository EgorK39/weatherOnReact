import * as React from "react";
import "../styles/Map.css";
import GoogleMapReact from 'google-map-react';


function Map(props) {
    const center = {
        center: {
            lat: props.latitud,
            lng: props.longitud
        }
    }
    const defaultProps = {
        center: {
            lat: 55.7522200,
            lng: 37.6155600

        },
        zoom: 14
    };
    return (
        <>
            <div id={"divId"}>
                {/*<h1>{+props.latitud.toFixed(2)},*/}
                {/*    {+props.longitud.toFixed(2)} from MAP</h1>*/}
                {/*<h2>{typeof props.latitud} {typeof props.longitud}</h2>*/}
                <div style={{
                    height: '60vh', width: '70%',
                    margin: '10px auto'
                }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: ""}}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        center={center.center}
                    >

                    </GoogleMapReact>
                </div>
            </div>
        </>


    )


}

export default Map;