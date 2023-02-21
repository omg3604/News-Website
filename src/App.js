import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Navbar from './components/NavBar.js';
import News from './components/News';
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route exact path='/' element={<News key="General" pageSize={6} country={"in"} category={"General"}></News>}></Route>            
            <Route exact path='/General' element={<News key="General" pageSize={6} country={"in"} category={"General"}></News>}></Route>
            <Route exact path='/Business' element={<News key="Business" pageSize={6} country={"in"} category={"Business"}></News>}></Route>
            <Route exact path='/Entertainment' element={<News key="Entertainment" pageSize={6} country={"in"} category={"Entertainment"}></News>}></Route>
            <Route exact path='/Health' element={<News key="Health" pageSize={6} country={"in"} category={"Health"}></News>}></Route>
            <Route exact path='/Science' element={<News key="Science" pageSize={6} country={"in"} category={"Science"}></News>}></Route>
            <Route exact path='/Sports' element={<News key="Sports" pageSize={6} country={"in"} category={"Sports"}></News>}></Route>
            <Route exact path='/Technology' element={<News key="Technology" pageSize={6} country={"in"} category={"Technology"}></News>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

