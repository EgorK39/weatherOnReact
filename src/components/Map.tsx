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
            lat: 11.99835602,
            lng: 77.01502627

        },
        zoom: 14
    };
    return (
        <>
            <h1>{+props.latitud.toFixed(2)},
                {+props.longitud.toFixed(2)} from MAP</h1>
            <h2>{typeof props.latitud} {typeof props.longitud}</h2>
            <div style={{height: '60vh', width: '70%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: ""}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    center={center.center}
                >

                </GoogleMapReact>
            </div>
        </>


    )


}

export default Map;