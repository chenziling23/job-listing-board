import React,{useState} from "react";
import "../css/PostJob.css";
import axios from "axios";
import { useNavigate } from 'react-router';
import { useParams } from 'react-router'; 
import { useEffect } from "react";
import Nav from "./Nav";

function EditJob(props) {

    const [jobData, setJobData] = useState({
        title: "",
        company: "",
        location: "",
        description: "",
        employerEmail: "",
        postDate: "",
    });


    const id = useParams().id;
    function getJob() {
        axios.get("/api/jobs/jobDetail/" + id)
        .then(response =>
            setJobData(response.data))
        .catch(error => console.log("error"))}

    useEffect(getJob, [])


    const navigate = useNavigate();
    function editJob() {
        axios.put(`/api/jobs/edit/${id}`, jobData)
            .then((jobResponse) => {
                navigate('/jobDetail/'+id);
            })
            .catch(error => console.log(error));
    }


    return(
        <div className="page">
            <Nav type = "editjob" />
     

        <div className = "contain">
            <div className="job-finder">
                JobFinder
            </div>

            <div className = "username">
                Title*:
            </div>
            <div className = "input-box">
            <input type='text' value={jobData.title} onChange={(e) => {
                const title = e.target.value;
                console.log(title);
                setJobData({
                    ...jobData,
                    title: title
                })
            }}/>
            </div>

            <div className = "username">
                Company*:
            </div>
            <div className = "input-box">
            <input type='text' value={jobData.company} onChange={(e) => {
                const company = e.target.value;
                setJobData({
                    ...jobData,
                    company: company
                })
            }}/>
            </div>

            <div className = "username">
                Location*:
            </div>
            <div className = "input-box">
            <input type='text' value={jobData.location} onChange={(e) => {
                const location = e.target.value;
                setJobData({
                    ...jobData,
                    location: location
                })
            }}/>
            </div>

            <div className = "username">
                Description*:
            </div>
            <div className = "input-box">
            <input type='text' value={jobData.description} onChange={(e) => {
                const description = e.target.value;
                setJobData({
                    ...jobData,
                    description: description
                })
            }}/>
            </div>

            <div className = "username">
                Employer Email*:
            </div>
            <div className = "input-box">
            <input type='text' value={jobData.employerEmail} onChange={(e) => {
                const employerEmail = e.target.value;
                setJobData({
                    ...jobData,
                    employerEmail: employerEmail
                })
            }}/>
            </div>
            <div className = "username">
                Company Website(Optional):
            </div>
            <div className = "input-box">
            <input type='text' value={jobData.web} onChange={(e) => {
                const web = e.target.value;
                setJobData({
                    ...jobData,
                    web: web
                })
            }}/>
            </div>

            <button onClick={editJob}>Submit Edit</button>
           
        </div>
        </div>  
          
     
    );
}

export default EditJob