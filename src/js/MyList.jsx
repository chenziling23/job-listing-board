import React, {useState, useEffect} from "react";
import { useParams } from 'react-router'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function MyList(props) {


    const jobTitle = useParams().job;
    const [job, setJob] = useState([]);

    function tryDelete () {
        axios.delete('http://localhost:8000/api/jobs/delete')
            .then(response => {
                setJob(response.data)
            })
            .catch(error => console.log(error));
    }

    function displayMyList () {
        axios.get('http://localhost:8000/api/jobs/findAll')
            .then(response => {
                console.log(response);
                setJob(response.data)
            })
            .catch(error => console.log("Could not find the job"));
    }

    const jobList = job.map(oneJob => {
        return (
                <div id = "joblst">
                <button>Edit</button>
                <button>Delete</button>
                <Link to={"/jobDetail/"+oneJob._id}>
                <div>
                  <p>Job Title: {oneJob.title}</p>
                  <p>Company: {oneJob.company}</p>
                  <p>Location: {oneJob.location}</p>
                </div>
                </Link>
                <br/>
                </div>)
      })

    useEffect(displayMyList, []);
    
    return (
        <div> 
            {jobList}
        </div>
    )
}