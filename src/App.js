

import React, { Component} from 'react'
import {  HashRouter, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Features from "./Components/Features";
import Info from "./Components/Info";
import Contact from "./Components/Contact";

class App extends Component {
  render() {
  return (
      <HashRouter>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Features' component={Features} />
      <Route path='/Info' component={Info} />
      <Route path='/Contact' component={Contact} /> 
      </HashRouter> 
      
  
  );  
}
}

export default App;
