import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  pageSize = 16;
  

  render() {
    return (
      <div>
        <Router>

        <Navbar/>         
          <Switch>
            <Route exact path="/"><News key="general " pageSize={this.pageSize}  country="us" category="general" /></Route>
            <Route exact path="/business"><News key="business" pageSize={this.pageSize} apiKey ={this.apiKey} country="us" category="business" /></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pageSize} apiKey ={this.apiKey} country="us" category="entertainment" /></Route>
            <Route exact path="/health"><News key="health" pageSize={this.pageSize} apiKey ={this.apiKey} country="us" category="health" /></Route>
            <Route exact path="/science"><News key="science" pageSize={this.pageSize} apiKey ={this.apiKey} country="us" category="science" /></Route>
            <Route exact path="/sports"><News key="sports" pageSize={this.pageSize} apiKey ={this.apiKey} country="us" category="sports" /></Route>
            <Route exact path="/technology"><News key="technology" pageSize={this.pageSize} apiKey ={this.apiKey} country="us" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

