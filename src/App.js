import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Forex from './components/Forex';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Museums from './components/Museums';
import Attraction from './components/Attract';

class App extends React.Component{
  render () {
    return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/forex" component={Forex} />
      <Route exact path="/museums" component={Museums} />
      <Route exact path="/attract" component={Attraction} />
    </Router>
  )}
}



export default App;
