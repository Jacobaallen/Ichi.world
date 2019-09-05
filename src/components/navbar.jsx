import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';

class Navbar extends Component{
  render () {
    return (
        <div className="nav">
          <ul>
            <div className="logo">
              <a href="/"><img src="/giphy.gif" alt="logo" width="47" height="55"/></a>
            </div>
            <li><Link to="/">Home</Link></li>
            <li><a href="#map">Map</a></li>
            <li><Link to="/forex">Money</Link></li>
          </ul>
        </div>
      )
    }
  }

export default Navbar;
