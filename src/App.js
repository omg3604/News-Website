import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Navbar from './components/NavBar.js';
import News from './components/News';
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API2
  state= {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({progress: progress});
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          {/* for setting top loading bar using builtin component */}
          <LoadingBar
            height={3}
            color='#B4E4FF'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="General" pageSize={6} country={"in"} category={"General"}></News>}></Route>
            <Route exact path='/General' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="General" pageSize={6} country={"in"} category={"General"}></News>}></Route>
            <Route exact path='/Business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Business" pageSize={6} country={"in"} category={"Business"}></News>}></Route>
            <Route exact path='/Entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Entertainment" pageSize={6} country={"in"} category={"Entertainment"}></News>}></Route>
            <Route exact path='/Health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Health" pageSize={6} country={"in"} category={"Health"}></News>}></Route>
            <Route exact path='/Science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Science" pageSize={6} country={"in"} category={"Science"}></News>}></Route>
            <Route exact path='/Sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Sports" pageSize={6} country={"in"} category={"Sports"}></News>}></Route>
            <Route exact path='/Technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Technology" pageSize={6} country={"in"} category={"Technology"}></News>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

