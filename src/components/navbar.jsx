import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';

class Navbar extends Component{
  render () {
    return (
        <div className="nav">
          <ul>
            <a href="/"><img src="/giphy.gif" alt="logo" width="47" height="55"/></a>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/forex">Money</Link></li>
          </ul>
        </div>
      )
    }
  }

export default Navbar;
