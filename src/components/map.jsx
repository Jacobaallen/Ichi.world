import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as museumData from "./museum.json";
import "../styles/Map.css";


export  default function App() {
const [viewport, setViewport] = useState({
  latitude:25.774266,
  longitude:-80.193659,
  width: '100ve',
  height: '100vh',
  zoom: 10
});
const [selectedMuseum, setSelectetMuseum] = useState(null);

  return (
    <div>
      <ReactMapGL {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/loghorizon/cjzuari2j024k1cpmup5rkywa"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        >
        {museumData.features.map(museum => (
          <Marker
            key={museum.properties.MUSEUM_ID}
            latitude={museum.geometry.coordinates[1]}
            longitude={museum.geometry.coordinates[0]}
            >

            <button className="marker-btn" onClick={(e) => {
                e.preventDefault();
                setSelectetMuseum(museum)
              }}
            >
              <img src="/images/Museum.png" alt="Museum Icon" />
            </button>
          </Marker>
        ))}

        {selectedMuseum ? (
          <Popup latitude={selectedMuseum.geometry.coordinates[1]}
                 longitude={selectedMuseum.geometry.coordinates[0]}>
            <div>
              park
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>

  );

}
