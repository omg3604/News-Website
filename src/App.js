import React from 'react';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Navbar from './components/NavBar.js';
import News from './components/News';

const App  = () => {
  const apiKey = 'a4cc90b77e91426f9f474fe2d4d76352'
  const [progress, setProgress] = useState(0);

  const setProg = (prog) => {
    setProgress(prog);
  }

    return (
      <Router>
        <div>
          <Navbar></Navbar>
          {/* for setting top loading bar using builtin component */}
          <LoadingBar
            height={3}
            color='#B4E4FF'
            progress={progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProg} apiKey={apiKey} key="General" pageSize={6} country={"in"} category={"General"}></News>}></Route>
            <Route exact path='/General' element={<News setProgress={setProg} apiKey={apiKey} key="General" pageSize={6} country={"in"} category={"General"}></News>}></Route>
            <Route exact path='/Business' element={<News setProgress={setProg} apiKey={apiKey} key="Business" pageSize={6} country={"in"} category={"Business"}></News>}></Route>
            <Route exact path='/Entertainment' element={<News setProgress={setProg} apiKey={apiKey} key="Entertainment" pageSize={6} country={"in"} category={"Entertainment"}></News>}></Route>
            <Route exact path='/Health' element={<News setProgress={setProg} apiKey={apiKey} key="Health" pageSize={6} country={"in"} category={"Health"}></News>}></Route>
            <Route exact path='/Science' element={<News setProgress={setProg} apiKey={apiKey} key="Science" pageSize={6} country={"in"} category={"Science"}></News>}></Route>
            <Route exact path='/Sports' element={<News setProgress={setProg} apiKey={apiKey} key="Sports" pageSize={6} country={"in"} category={"Sports"}></News>}></Route>
            <Route exact path='/Technology' element={<News setProgress={setProg} apiKey={apiKey} key="Technology" pageSize={6} country={"in"} category={"Technology"}></News>}></Route>
          </Routes>
        </div>
      </Router>
    )
  }

export default App;
