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

    <div className="forex-page">
      <button className="forex-button" onClick="openForex()">Money exchange</button>
      <div className="forex-popup" id="myForex">
        <script src="forex.jsx"></script>
        <button type="button" className="btncancel" onClick="closeForex()">Close</button>
      </div>

    </div>
  );
}
