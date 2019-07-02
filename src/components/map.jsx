import React, { useState } from 'react';
import ReactMapGL, {Marker} from "react-map-gl"
import * as geolocate from "./Geolocation.jsx"

export  default function App() {
const [viewport, setViewport] = useState({
  latitude:25.774266,
  longitude:-80.193659,
  width: '100ve',
  height: '100vh',
  zoom: 10
});

  return (
    <div>
      <ReactMapGL {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        >
          {geolocate.getLocation.map((location) => (
            <Marker key={location.navigator.}>
              <div>location</div>
            </Marker>
          ))}
      </ReactMapGL>
    </div>
  );
}
