import React from 'react';
import { useState } from 'react';
import axios, { Axios } from 'axios';
import './HomePage.css';
import { Link } from 'react-router-dom';


function HomePage() {
  const [formInput, setFormInput] = useState('');
  const [job, setJob] = useState({title: 'No match job title', company: 'None'});

  function onSearchButtonClick() {
    axios.get("http://localhost:8000/api/jobs/:keyword", job)
      .then(response => setJob(response.data))
      .catch(error => console.log("Could not find the job"));
  }

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
          <button>Favorite</button>
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
        </div>
      </div>
    </div>
  );
}

export default HomePage;
