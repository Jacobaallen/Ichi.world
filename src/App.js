import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends React.Component{
  render () {
    return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Footer/>
    </Router>
  )}
}



export default App;
