import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';


export default function Favorite(){
    const navigate = useNavigate();
    const [fav, setFav] = useState([])
    const [job, setJob] = useState({})
    // function getFavorite () {
    //     axios.get('/api/jobs/find/favoriteLst')
    //             .then((registerResponse) => setFav(registerResponse.data))
    //             .catch(error => console.log(error));    
    // }


    function checkLogin() {
        axios.get('/api/users/whoIsLoggedIn')
            .then((response) => {
                axios.get("/api/users/need/"+response.data)
                .then((favResponse) => setFav(favResponse.data.favorites))
                .catch(error => console.log(error))
            })
            .catch(() => navigate('/logIn'))
    }

    useEffect(checkLogin,[]);

    // function findJob(id) {
    //     axios.get("api/jobs/jobDetail/"+id)
    //     .then((response)=> setJob(response.data))
    //     .catch(error => console.log(error))
    // }

    // const result = [];
    // for(let one of fav) {
    //     result.push(axios.get("api/jobs/jobDetail/"+one)
    //     .then((response)=> {
    //         setJob(response.data)
    //             return (<div >
    //                 <Link to={"/jobDetail/"+job._id}>
    //                 <div >
    //                 <p>Job Title: {job.title}</p>
    //                 <p>Company: {job.company}</p>
    //                 <p>Location: {job.location}</p>
    //                 </div>
    //                 </Link>
    //                 <br/>
    //             </div>)}))
    // }
    

    const result = fav.map(one => {
        axios.get("api/jobs/jobDetail/"+one)
            .then((response)=> {
                    return (<div >
                    <Link to={"/jobDetail/"+response.data._id}>
                    <div >
                    <p>Job Title: {response.data.title}</p>
                    <p>Company: {response.data.company}</p>
                    <p>Location: {response.data.location}</p>
                    </div>
                    </Link>
                    <br/>
                    </div>)})
            .catch(error => console.log(error))
        })

    
        return (
            <div>
                {result}
            </div>
        )

}