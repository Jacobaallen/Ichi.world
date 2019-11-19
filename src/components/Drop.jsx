import React, { Component } from 'react';
import '../styles/drop.css';
import Forex from './Forex';

class Blog extends Component {
  render () {
    return(
      <div className="dropdown-master">
        <div className="logo">
          <a href="/"><img src="/images/giphy.gif" alt="logo" width="47" height="55"/></a>
        </div>
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
    export default Blog;
