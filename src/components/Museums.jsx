import React, { Component } from 'react';
import Map from './Map';
import '../styles/Museums.css';

class Museums extends Component {
  render () {
    return(
      <div className="master">
        <div className="top-title-1">
          <div className="logo-head">
            <a href="/"><img src="/images/name-logo.png" alt="logo" height="30"/></a>
          </div>
          <h1>Museums</h1>
        </div>
        <div className="map" id="map">
          <Map/>
        </div>


      </div>
    )
  }
}
export default Museums;
