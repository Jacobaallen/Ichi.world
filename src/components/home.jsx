import React, { Component } from 'react';
import Map from './Map';
import Draw1 from './Draw1';
import Drawer from 'react-drag-drawer';
import '../styles/Home.css';



class Home extends Component {
  render () {
    return(
      <div className="master">
        <div className="map">
          <Map/>
        </div>

        <div className="moneyex">
          <Draw1/>
        </div>
      </div>
    )
  }
}
export default Home;
