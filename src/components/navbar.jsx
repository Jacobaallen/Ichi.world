import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';

class Navbar extends Component{
  render () {
    return (
        <div className="nav">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/forex">Money</Link>
          </ul>
        </div>
      )
    }
  }

export default Navbar;
