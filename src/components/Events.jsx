import React, { Component } from 'react';
import Calendar from './Calendar';
import '../styles/Events.css';

class Events extends Component {
  render () {
    return(
      <div className="calendar" id="calendar">
        <Calendar/>
      </div>
    )
  }
}

export default Events;
