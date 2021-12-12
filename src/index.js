import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from "react";
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import HomePage from './js/HomePage.jsx';
import LoggedHome from './js/LoggedHome';
import LogIn from './js/LogIn';
import Logout from './js/Logout';
import Register from './js/Register';
import Favorite from './js/Favorite';
import PostJob from './js/PostJob';
import MyList from './js/MyList';
import JobDetail from './js/JobDetail';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path = "/userLogged" element = {<LoggedHome />}/>
      <Route path = "/logIn" element = {<LogIn />} />
      <Route path = "/logout" element = {<Logout />} />
      <Route path = "/register" element = {<Register />} />
      <Route path = "/favorite" element = {<Favorite />} />
      <Route path = "/postJob" element = {<PostJob />} />
      <Route path = "/jobDetail/:job" element = {<JobDetail />} />
      <Route path = "/myList" element = {<MyList />} />
    </Routes>
  </Router>


  // <React.StrictMode>
  //   <HomePage />
  // </React.StrictMode>
  ,
  document.getElementById('root')
);
