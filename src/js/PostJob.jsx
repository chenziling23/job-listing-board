import React,{useState, useEffect} from "react";
import "../css/PostJob.css";
import axios from "axios";
import { useNavigate } from 'react-router';
import Nav from "./Nav";

function PostJob(props) {
    const [jobData, setJobData] = useState({
        title: '',
        company: '',
        location: '',
        description: '',
        employerEmail: '',
        web: '',
        postUser: '',
    });
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const navigateLogin = useNavigate();
    function tryPostJob() {
        axios.post('/api/jobs/add', jobData)
            .then((jobResponse) => {
                // console.log(jobResponse);
                // console.log("Success!");
                navigate('/jobDetail/'+jobResponse.data._id);
            })
            .catch(e => setError(e.response.data));
    }

    
    // const [myList, setMyList] = useState([]);
    function addToMyList() {
        axios.get("/api/users/whoIsLoggedIn")
            .then((userRes) => {
                const username = userRes.data;
                setJobData({
                    ...jobData,
                    postUser: username
                })
                // axios.get('/api/jobs/aJob/' + userRes.data)
                //     .then((jResponse) => setMyList(jResponse.data))
                //     .catch(error => console.log(error));
            })
            .catch(() => navigateLogin('/logIn'));
    }
    useEffect(addToMyList, []);

    return(
        <div className="page">
            <Nav type = "postjob" />

        <div className = "contain">
            <div className="job-finder">
                JobFinder:
                <p>{error}</p>
            </div>

            <div className = "username">
                Title*:
            </div>
            <div className = "input-box">
            <input type='text' value={jobData.title} onChange={(e) => {
                const title = e.target.value;
                setJobData({
                    ...jobData,
                    title: title
                })
            }}/>
            </div>

            <div className = "username">
                Company Name*:
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

            <button onClick={tryPostJob}>Post Job</button>
        </div>
        </div> 
    );

}

export default PostJob