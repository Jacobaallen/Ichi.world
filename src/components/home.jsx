import React, { Component } from 'react';
import Map from './Map';
import Forex from './Forex'
import '../styles/Home.css';





class Home extends Component {
  render () {
    return(
      <div className="master">
        <div className="map">
          <Map/>
        </div>
        <div className="money">
          <Forex/>
        </div>


      </div>
    )
  }
}
export default Home;
