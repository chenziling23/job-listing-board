import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "../css/HomePage.css";
import Nav from "./Nav";
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router';


function HomePage() {
  const [formInput, setFormInput] = useState('');
  // const [job, setJob] = useState({title: 'No match job title', company: 'None'});
  const [job, setJob] = useState([]);

  function onSearchButtonClick() {
    axios.get("/api/jobs/" + formInput)
      // .then(response => console.log(response))
      .then(response => {
        console.log(response);
        setJob(response.data)})
      .catch(error => setJob({
        title: "No job found",
        company: "No company found", 
      }));
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

  // console.log("job: ");
  // console.log(job);
  // console.log("jobs: ");
  // console.log(jobs);

  return (
    <div className="home">
      <Nav type = "HomePage"/>
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
        </div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
