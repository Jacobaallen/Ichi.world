import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Forex from './components/Forex';
import About from './components/About';

class App extends React.Component{
  render () {
    return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/forex" component={Forex} />

      <Navbar/>
      <Footer/>
    </Router>
  )}
}



export default App;
