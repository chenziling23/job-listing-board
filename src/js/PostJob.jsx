import React,{useState} from "react";
import "../css/PostJob.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router';

function PostJob(props) {

    const [jobData, setJobData] = useState({
        title: '',
        company: '',
        location: '',
        description: '',
        employerEmail: '',
        postDate: '',
    });

    const navigate = useNavigate();
    function tryPostJob() {
        axios.post('http://localhost:8000/api/jobs/add', jobData)
            .then((jobResponse) => {
                console.log(jobResponse);
                console.log("Success!");
                navigate('/userLogged');
            })
            .catch(error => console.log(error));

        // axios.put('http://localhost:8000/api/jobs/61afc99d2a5d4f68eac12b52', jobData)
        //     .then((jobResponse) => {
        //         console.log(jobResponse);
        //         console.log("Success!");
        //         navigate('/userLogged');
        //     })
        //     .catch(error => console.log(error));
    }


    return(
        <div className="page" align="right">
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>
                <Link to="/favorite">
                    <button>Favorite</button>
                </Link>
                <button>username</button>
            </div>

        <div className = "contain">
            <div className="job-finder">
                JobFinder
            </div>

            <div className = "username">
                Title:
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
                Company:
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
                Location:
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
                Description:
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
                Employer Email:
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
                Post Date:
            </div>
            <div className = "input-box">
            <input type='text' value={jobData.postDate} onChange={(e) => {
                const postDate = e.target.value;
                setJobData({
                    ...jobData,
                    postDate: postDate
                })
            }}/>
            </div>

            <button onClick={tryPostJob}>Post Job</button>
           
        </div>
        </div>    
     
    );

}

export default PostJob