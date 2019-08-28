import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Forex from './components/Forex';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends React.Component{
  render () {
    return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/forex" component={Forex} />
      <Navbar/>
      <Footer/>
    </Router>
  )}
}



export default App;
