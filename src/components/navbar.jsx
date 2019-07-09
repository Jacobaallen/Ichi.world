import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';
import './Forex';

class Navbar extends Component() {
  render () {
    return (
        <div className="nav">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/Forex">Money exchange</Link>
          </ul>
        </div>
      )
    }
  }

export default Navbar;
