import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';

class Navbar extends Component{
  render () {
    return (
        <div className="nav">
          <ul>
            <li><a href="/"><img src="/giphy.gif" alt="logo" width="47" height="55"/></a></li>
            <li><a href="/">Home</a></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="/">Map</a></li>
            <li><Link to="/forex">Money</Link></li>
            <li><Link to="/blog">Travel Logs</Link></li>
          </ul>
        </div>
      )
    }
  }

export default Navbar;
