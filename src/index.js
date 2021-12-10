import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './HomePage.jsx';
import LoggedHome from './LoggedHome';
import LogIn from './LogIn';
import Logout from './Logout';
import Register from './Register';
import Favorite from './Favorite';
import PostJob from './PostJob';
import MyList from './MyList';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path = "/userLogged" element = {<LoggedHome />} />
      <Route path = "/logIn" element = {<LogIn />} />
      <Route path = "/logout" element = {<Logout />} />
      <Route path = "/register" element = {<Register />} />
      <Route path = "/favorite" element = {<Favorite />} />
      <Route path = "/postJob" element = {<PostJob />} />
      <Route path = "/jobDetail" element = {<jobDetail />} />
      <Route path = "/myList" element = {<MyList />} />
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
