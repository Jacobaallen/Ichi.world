import React, { Component } from 'react';
import Map from './Map';
import '../styles/Home.css';





class Home extends Component {
  render () {
    return(
      <div className="master">
        <div className="top">
          
        </div>
        <div className="map" id="map">
          <Map/>
        </div>


      </div>
    )
  }
}
export default Home;
