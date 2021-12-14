import React, {useState, useEffect} from "react";
import { useParams } from 'react-router'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router';

export default function MyList(props) {


    // const jobTitle = useParams().job;
    const [job, setJob] = useState([]);
    const [jobNum, setJobNum] = useState(0)
    const [jobData, setJobData] = useState({
        title: '',
        company: '',
        location: '',
        description: '',
        employerEmail: '',
        postDate: '',
    });



    const navigate = useNavigate();
    function tryEdit (id) {
        // axios.put("/api/jobs/edit/" + id)
        //     .then(response => {
        //         navigate('/EditJob');
        //     })
        //     .catch(error => console.log(error));

        
        navigate("/editJob/" + id);
    }


    const navigateBack = useNavigate();
    function tryDelete (id) {
        axios.delete("/api/jobs/delete/" + id)
            .then(response => {
                // console.log(id);
                // console.log("success");
                
                navigateBack("/userLogged");
                window.location.reload();
                // let curJobNum = jobNum;
                // setJobNum(curJobNum - 1);
                // setJobData(response.data);
            })
            .catch(error => console.log(error));
    }

    function displayMyList () {
        axios.get('/api/jobs/findAll')
            .then(response => setJob(response.data))

            .catch(error => console.log("Could not find the job"));
    }

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

    
    useEffect(displayMyList, [jobNum]);
    
    return (
        <div> 
            <div>
            {jobList.length === 0 && <p>No Post yet</p>}
            </div>
            {jobList}
        </div>
    )
}