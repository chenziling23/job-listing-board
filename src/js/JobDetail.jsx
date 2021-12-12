import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router'; 
import Heart from "react-heart";
import { useNavigate } from 'react-router';


function JobDetail() {
    const navigate = useNavigate();
    const jobTitle = useParams().job;
    const [job, setJob] = useState("");
    const [active, setActive] = useState(false);

    function findJobDetails () {
        axios.get('/api/jobs/jobDetail/' + jobTitle)
            .then(response => {setJob(response.data)})
            .catch(error => console.log(error));
    }

    function needlike() {
        axios.put("/api/jobs/putlike/"+jobTitle)

                .then(response => console.log("hiii"))
                .catch(error => console.log(error))
    }


    function checkLogin() {
        axios.get('/api/users/whoIsLoggedIn')
            .then(() => console.log("Success"))
            .catch(() => navigate('/logIn'))
    }
    useEffect(findJobDetails, []);

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
            <ul>
                <li>Job title: {job.title}</li>
                <li>Company name: {job.company}</li>
                <li>Location: {job.location}</li>
                <li>Description: {job.description}</li>
                <li>Employer email contact: <a href = {job.employerEmail}>{job.employerEmail}</a></li>
                <li>Posting date : {job.postDate}</li>
            </ul>
            <Heart style={{width: "2rem"}} isActive={active} onClick={() => {setActive(!active); needlike(); checkLogin();}}></Heart>
        </div>
    )
}

export default JobDetail