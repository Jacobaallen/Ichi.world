import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';

class Navbar extends Component{
  render () {
    return (
        <div className="nav">
            <li><a href="/"><img src="/images/giphy.gif" alt="logo" width="47" height="55"/></a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/Attract">Attraction Map</a></li>
            <li><a href="/Museums">Museum Map</a></li>
            <li><a href="/Events">Events</a></li>
        </div>
      )
    }
  }

export default Navbar;
