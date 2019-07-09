import React, { useState } from 'react';
import ReactMapGL from "react-map-gl"


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
        Markers here

      </ReactMapGL>
    </div>
  );
}
