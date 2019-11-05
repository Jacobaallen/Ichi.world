import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as museumData from "./museum.json";
import "../styles/Map.css";


export  default function App() {
const [viewport, setViewport]: {
  latitude:25.774266,
  longitude:-80.193659,
  width: '100ve',
  height: '100vh',
  zoom: 10
},
userLocation: {}
};

setUserLocation = () => {
  navigator.geolocation.getCurrentPosition(position => {
     let setUserLocation = {
         lat: position.coords.latitude,
         long: position.coords.longitude
      };
     let newViewport = {
        height: "100vh",
        width: "100vw",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 10
      };
      this.setState({
        viewport: newViewport,
        userLocation: setUserLocation
     });
  });
};


const [selectedMuseum, setSelectetMuseum] = useState(null);

//this is to use the button esc on the key board.
  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectetMuseum(null);
      }
    };
    window.addEventListener("keydown", listener);


  }, []);



  return (
    <div className="App">
      <button onClick={this.setUserLocation}>My location</button>
      <div className="map-1">
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
          //This is all happening in a Popup.
          <Popup
             latitude={selectedMuseum.geometry.coordinates[1]}
             longitude={selectedMuseum.geometry.coordinates[0]}
             onClose={() => {
               setSelectetMuseum(null);
             }}
             >
            <div>
              <h2>{selectedMuseum.properties.NAME}</h2>
              <p>{selectedMuseum.properties.DESCRIPTIO}</p>
              <p>{selectedMuseum.properties.TIME}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
      </div>
    </div>

  )
  }

}
