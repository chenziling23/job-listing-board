import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "../css/HomePage.css";
import Nav from "./Nav";
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router';


function HomePage() {
  const [formInput, setFormInput] = useState('');
  const [job, setJob] = useState([]);
  const [error, setError] = useState('');

  function onSearchButtonClick() {
    axios.get("/api/jobs/" + formInput)
      // .then(response => console.log(response))
      .then(response => {
        setJob(response.data)
        setError("")})
      .catch(e => setError(e.response.data));
  }

  

  const jobs = job.map((j) => {
    if (j === undefined) {
      return (
        <div></div>
      )
    }else{
      return (
        <div id = "joblst">
        <Link to={"/jobDetail/"+j._id}>
        <div id = "onejob">
          <p>Job Title: {j.title}</p>
          <p>Company: {j.company}</p>
          <p>Location: {j.location}</p>
        </div>
        </Link>
        <br/>
        </div>)
    }
})

  return (
    <div className="home">
       <div>
            <Link to="/login">
                <button>Log In</button>
            </Link>
            <Link to="/register">
                <button>Register</button>
            </Link>
            <Link to="/favorite">
                <button>Favorite Page</button>
            </Link>   
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
           {jobs}
           <p>{error}</p>
        </div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;