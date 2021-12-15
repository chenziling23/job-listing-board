import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router';


export default function MyList(props) {


    // const jobTitle = useParams().job;
    const [job, setJob] = useState([]);

    const navigate = useNavigate();
    function tryEdit (id) {
        navigate("/editJob/" + id);
    }

    const navigateBack = useNavigate();
    function tryDelete (id) {
        axios.delete("/api/jobs/delete/" + id)
            .then(response => {
                navigateBack("/userLogged");
                window.location.reload();
            })
            .catch(error => console.log(error));
    }

    // const [list, setList] = useState("");
    function findLogInUserAndSetJobList () {
        axios.get("/api/users/whoIsLoggedIn")
            .then(userResponse => {
                // console.log(response);
                axios.get("/api/jobs/aJob/" + userResponse.data)
                    .then((listResponse) => setJob(listResponse.data))
                    .catch(error => console.log(error))
            })
            .catch(() => navigate('/logIn'))
    }
    useEffect(findLogInUserAndSetJobList, []);


    // function displayMyList () {
    //     axios.get('/api/jobs/findAll')
    //         .then(response => setJob(response.data))

    //         .catch(error => console.log("Could not find the job"));
    // }

    const jobList = job.map(oneJob => {
        return (
            
                <div id = "joblst">
                <button onClick={() => {tryEdit(oneJob._id)}}>Edit</button>
                <button onClick={() => {tryDelete(oneJob._id)}}>Delete</button>
                <Link to={"/jobDetail/"+oneJob._id}>
                
                <div>
                  <p key="uniqueId1">Job Title: {oneJob.title}</p>
                  <p key="uniqueId2">Company: {oneJob.company}</p>
                  <p key="uniqueId3">Location: {oneJob.location}</p>
                </div>
                </Link>
                <br/>
                </div>)
      })


    
    return (
        <div> 
            <div>
            {jobList.length === 0 && <p>No Post yet</p>}
            </div>
            {jobList}
        </div>
    )
}