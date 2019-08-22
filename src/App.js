import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Draw1 from './components/Draw1'

class App extends React.Component{
  render () {
    return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/Draw1" component={Draw1} />
      <Navbar/>
      <Footer/>
    </Router>
  )}
}



export default App;
