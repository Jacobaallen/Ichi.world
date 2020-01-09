import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Forex from './components/Forex';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Museums from './components/Museums';
import Attraction from './components/Attract';
import Drop from './components/Drop';
import LogBook from './components/LogBook';
import Testmap from './components/Testmap';


class App extends React.Component{
  render () {
    return (
    <Router>
      <Navbar/>
      <Drop/>
      <Route exact path="/" component={Home} />
      <Route exact path="/forex" component={Forex} />
      <Route exact path="/museums" component={Museums} />
      <Route exact path="/attract" component={Attraction} />
      <Route exact path="/testmap" component={Testmap} />
    </Router>
  )}
}



export default App;
