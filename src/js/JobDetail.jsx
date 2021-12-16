import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router'; 
import Heart from "react-heart";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import moment from 'moment';


function JobDetail() {
    const navigate = useNavigate();
    const jobTitle = useParams().job;
    const [job, setJob] = useState("");
    const [name, setName] = useState("");
    const [active, setActive] = useState(false);

    function findJobDetails () {
        axios.get('/api/jobs/jobDetail/' + jobTitle)
            .then(response => {setJob(response.data)})
            .catch(error => console.log(error));
    }


    function checkLogin() {
        axios.get('/api/users/whoIsLoggedIn')
            .then((res) => {
                if (!active){
                    axios.put("/api/users/putFavLst/"+res.data+"/"+jobTitle)
                }else{
                    axios.put("/api/users/removeFavLst/"+res.data+"/"+jobTitle)
                }
            })
            .catch(() => navigate('/logIn'))
    }
    useEffect(findJobDetails, []);

    
    return (
        <div>
            <div>
                    <button onClick={
                        () => axios.post('/api/users/logout')
                        .then(() => {
                            navigate('/');
                        })
                        .catch(console.error)
                    }>Logout</button>
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
                </div>
                
            <ul>
                <li>Job title: {job.title}</li>
                <li>Company name: {job.company}</li>
                <li>Location: {job.location}</li>
                <li>Description: {job.description}</li>
                <li>Employer email contact: <a href = {job.employerEmail}>{job.employerEmail}</a></li>
                <div>
                {job.web != null && <li>Company Website: {job.web}</li>}
                </div>
                <li>Posting date : {moment().startOf(job.postDate).fromNow()}</li>
            </ul>
            <Heart style={{width: "2rem"}} isActive={active} onClick={() => {setActive(!active); checkLogin();}}></Heart>
        </div>
    )
}

export default JobDetail