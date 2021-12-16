import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/LoggedHome.css";
import Nav from "./Nav";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';


function LoggedHome() {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState('');

  const [job, setJob] = useState([]);

  function onSearchButtonClick() {
    axios.get("/api/jobs/" + formInput)
      .then(response => {setJob(response.data)})
      .catch(error => setJob({
        title: "No job found",
        company: "No company found", 
      }));
  }

  function checkLogin() {
    axios.get('/api/users/whoIsLoggedIn')
        .then((res) => console.log(res.data))
        .catch(() => navigate('/logIn'))
  }

  useEffect(checkLogin,[])


  const jobList = job.map(oneJob => {
    if (oneJob === undefined) {
      return (
        <div></div>
      )
    }else{
      return (
            <div id = "joblst">
            <Link to={"/jobDetail/"+oneJob._id}>
            <div id = "onejob">
              <p>Job Title: {oneJob.title}</p>
              <p>Company: {oneJob.company}</p>
              <p>Location: {oneJob.location}</p>
            </div>
            </Link>
            <br/>
            </div>)
    }
  })


  return (
    <div className="home">
      <Nav type = "logged"/>
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
          {/* only one display right now, using findone */}
          {jobList}

        </div>
        </div>
      </div>
    </div>
  );

}

export default LoggedHome;
