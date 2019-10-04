import React, { Component } from 'react';
import Map2 from './Map2';
import '../styles/Attraction.css';

class Attraction extends Component {
  render () {
    return(
      <div className="master">
        <div className="top-title-2">
          <h1>Attractions</h1>
        </div>
        <div className="map2" id="map2">
          <Map2/>
        </div>


      </div>
    )
  }
}
export default Attraction;