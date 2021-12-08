import axios from 'axios';
import React, {useState} from 'react';
import { useParams } from 'react-router';


function jobDetail(props) {

    // const jobTitle = useParams().jobTitle;
    // const [job, setJob] = useState(null);

    // function findJobDetails () {
    //     axios.get('http://localhost:8000/api/jobs/' + jobTitle)
    //         .then(response => setJob(response.data))
    //         .then(error => console.log("Could not find the job"));
    // }


    // const jobComponent = job ?
    //     (<><div>
    //         Job Title: {job.title}
    //         </div>
    //         <div>
    //         Job Company: {job.company}
    //         </div></>) :
    //         (<div> No job found</div>);

    return (
        <div>
            {/* { {jobComponent} } */}
            <h1>Hello</h1>
        </div>
    )
}

export default jobDetail