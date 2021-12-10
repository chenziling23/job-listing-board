import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "../css/HomePage.css";
import Nav from "./Nav";
import {useNavigate} from 'react-router';


function HomePage() {
  const [formInput, setFormInput] = useState('');
  // const [job, setJob] = useState({title: 'No match job title', company: 'None'});
  const [job, setJob] = useState([{
    // title: '',
    // company: '',
    // location: '',
    // description: '',
  }]);

  function onSearchButtonClick() {
    axios.get("http://localhost:8000/api/jobs/" + formInput)
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
    return (
    <div id={j._id}>
      <div>title: {j.title}</div>
      <div>company: {j.company}</div>
    </div>
    );
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
