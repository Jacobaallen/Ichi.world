import React, { Component } from 'react';
import Travelcards from './Travelcards';

class Blog extends Component {
  render () {
    return(
          <div className="master">
            <div className="top-title-3">
              <h1>Museums</h1>
            </div>
            <div className="cards" id="cards">
              <Travelcards/>
            </div>
          </div>
        )
      }
    }
    export default Blog;
