import React, { useState } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import * as museumData from "./museum.json";


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
        {museumData.features.map((mueseum)=>(
          <Marker
            key={mueseum.properties.MUSEUM_ID}
            latitude={mueseum.geometry.coordinates[1]}
            longitude={mueseum.geometry.coordinates[0]}
            >

            <button className="marker-btn">
              <img src="/Museum.png" alt="Museum Icon" />
            </button>
          </Marker>
        ))}


      </ReactMapGL>
    </div>

  );

}
