import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';
import Home from './Home';
import Map from './Map';
import Forex from './Forex';

export default function Navbar() {
    return (
      <nav className= "nav">
        <a className="navbar-link" href="/Map">Home</a>
        <a className="navbar-link" href="/Forex">Money exchange</a>
      </nav>
    )
  }
