import React, {useState} from "react";
import { useParams } from 'react-router'; 
import axios from 'axios';

export default function MyList(proprs) {


    const jobTitle = useParams().title;
    const [job, setJob] = useState('');

    function displayMyList () {
        axios.get('http://localhost:8000/api/jobs/findAll' + jobTitle)
            .then(response => setJob(response.data))
            .catch(error => console.log("Could not find the job"));
    }


    const jobComponent = job ?
        (<><div>
            Job Title: {job.title}
            </div>
            <div>
            Job Company: {job.company}
            </div></>) :
            
            (<div> No job found</div>);

    return (
        <div>Hello</div>
    )
}