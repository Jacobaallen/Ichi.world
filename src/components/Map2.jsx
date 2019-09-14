import React, { useState } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import * as attractionData from "./Attraction.json";
import "../styles/Map2.css";


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
        mapStyle="mapbox://styles/loghorizon/cjzuari2j024k1cpmup5rkywa"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        >
        {attractionData.features.map((attraction)=>(
          <Marker
            key={attraction.properties.ATTRACTION_ID}
            latitude={attraction.geometry.coordinates[1]}
            longitude={attraction.geometry.coordinates[0]}
            >

            <button className="marker-btn">
              <img src="/images/Museum.png" alt="Museum Icon" />
            </button>
          </Marker>
        ))}


      </ReactMapGL>
    </div>

  );

}
