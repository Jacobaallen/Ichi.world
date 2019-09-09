import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';

class Navbar extends Component{
  render () {
    return (
        <div className="sidenav">
            <div className="logo">
              <a href="/"><img src="/giphy.gif" alt="logo" width="47" height="55"/></a>
            </div>
            <a className="active" href="/">Home</a>
            <a href="/about">About</a>
            <a href="/">Map</a>
            <a href="/forex">Money</a>
            <a href="/blog">Travel Logs</a>
        </div>
      )
    }
  }

export default Navbar;
