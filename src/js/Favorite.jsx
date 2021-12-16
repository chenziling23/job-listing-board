import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';


export default function Favorite(props){
    const navigate = useNavigate();
    const [fav, setFav] = useState([])


    function checkLogin() {
        axios.get('/api/users/whoIsLoggedIn')
            .then((response) => {
                axios.get("/api/users/need/"+response.data)
                .then((favResponse) => {
                    setFav(favResponse.data.favorites)
                    console.log(fav);
                })
                .catch(error => console.log(error))
            })
            .catch(() => navigate('/logIn'))
    }

    useEffect(checkLogin,[]);

    

    const result = fav.map(one => {
        axios.get("/api/jobs/jobDetail/"+one)
            .then((response)=> {
                    return (<div>
                    <Link to={"/jobDetail/"+response.data._id}>
                    <div>
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