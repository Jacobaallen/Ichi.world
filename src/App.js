import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Forex from './components/Forex';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './components/Blog';
 
class App extends React.Component{
  render () {
    return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/forex" component={Forex} />
      <Footer/>
    </Router>
  )}
}



export default App;
