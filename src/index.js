import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './HomePage.jsx';
import LogIn from './LogIn';
import Register from './Register';
import Favorite from './Favorite';
import jobDetail from './jobDetail';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path = "/logIn" element = {<LogIn />} />
      <Route path = "/register" element = {<Register />} />
      <Route path = "/favorite" element = {<Favorite />} />
      <Route path = "/jobDetail" element = {<jobDetail />} />
    </Routes>
  </Router>

  // <React.StrictMode>
  //   <HomePage />
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
