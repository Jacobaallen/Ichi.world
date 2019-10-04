import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';
import Forex from './Forex';

class Navbar extends Component{
  render () {
    return (
        <div className="nav">
            <li><a href="/"><img src="/images/giphy.gif" alt="logo" width="47" height="55"/></a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/Attract">Attraction Map</a></li>
            <li><a href="/Museums">Museum Map</a></li>
            <div className="dropdown">
              <span>Foreign Currency Rates</span>
              <div className="dropdown-content">
                <Forex/>
              </div>
            </div>
        </div>
      )
    }
  }

export default Navbar;
