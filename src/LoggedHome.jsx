import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './LoggedHome.css';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router';


function LoggedHome() {
  const [formInput, setFormInput] = useState('');
  // const [job, setJob] = useState({title: 'No match job title', company: 'None'});
  const [job, setJob] = useState('');

  function onSearchButtonClick() {
    axios.get("http://localhost:8000/api/jobs/get/:keyword", job)
      // .then(response => console.log(response))
      .then(response => {setJob(response.data)})
      .catch(error => setJob({
        title: "No job found",
        company: "No company found", 
      }));
  }

//   const [userData, setUserData] = useState({
//     password: '',
//     username: '',
//   });

//   function tryLogin () {
//     axios.post('http://localhost:8000/api/users/login', userData)
//             .then((loginResponse) => {
//                 console.log(loginResponse);
//                 // navigate('/userLogged');
//             })
//             .catch(error => console.log(error));    
// }


   
  function displayUsername() {
    axios.get("localhost:8000/api/jobs/get/whoIsLoggedIn")
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  return (
    <div className="home">
      <div aligh="right">
        <Link to="/">
            <button>Home</button>
        </Link>
        <Link to="/logout">
            <button>Logout</button>
        </Link>
        <Link to="/register">
            <button>Register</button>
        </Link>
        <Link to="/favorite">
          <button>Favorite</button>
        </Link>
        <Link to="/postJob">
          <button>Post Job</button>
        </Link>
        <Link to="/myList">
          <button>My List</button>
        </Link>
        <button>{displayUsername}</button>
      </div>

      <div className="container">
      <div className="header">
        JobFinder
      <div className="put">
      </div>
        <input type='text' value={formInput}
        onChange={(e) => setFormInput(e.target.value)}
        />
        <button onClick={onSearchButtonClick}>
          Search job
        </button>
        <div>
           <p>{job.title}</p>
           <p>{job.company}</p>
        </div>

        </div>
      </div>
    </div>
  );

}

export default LoggedHome;
