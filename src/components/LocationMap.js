import React, { useEffect, useRef, useState } from "react";
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { useLocation } from "react-router-dom";

function LocationMap(props) {
    const location = useLocation();
    const [isMapReady, setMapReady] = useState(false);
    const [coordinates, setCoordinates] = useState({});

    const initMap = () => {
        const { search } = location;
        const params = new URLSearchParams(search);
        const latitude = parseFloat(params.get('latitude'));
        const longitude = parseFloat(params.get('longitude'));

        console.log(latitude, longitude);

        setCoordinates({ latitude, longitude });
        setMapReady(true);
    }

    useEffect(() => initMap(), []);

    return (
        <React.Fragment>
            {isMapReady ? (
                    <GoogleMap
                        defaultZoom={15}
                        defaultCenter={{lat: coordinates.latitude, lng: coordinates.longitude}}
                    >
                        <Marker position={{lat: coordinates.latitude, lng: coordinates.longitude}}/>
                    </GoogleMap>
                )
                : (<h1>Loading...</h1>)
            }
        </React.Fragment>
    )
}

const GoogleLocationMap = withGoogleMap(LocationMap);

export default function() {
    return (
        <GoogleLocationMap
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );
};


