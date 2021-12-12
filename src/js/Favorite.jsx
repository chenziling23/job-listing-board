import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';


export default function Favorite(){
    const navigate = useNavigate();
    const [fav, setFav] = useState([])
    function getFavorite () {
        axios.get('/api/jobs/find/favoriteLst')
                .then((registerResponse) => setFav(registerResponse.data))
                .catch(error => console.log(error));    
    }

    useEffect(getFavorite,[])

    function checkLogin() {
        axios.get('/api/users/whoIsLoggedIn')
            .then(() => console.log("Success"))
            .catch(() => navigate('/logIn'))
    }

    useEffect(checkLogin,[])

    const favlst = fav.map(one => {
        return (<div id = "favlst">
        <Link to={"/jobDetail/"+one._id}>
        <div id = "one">
          <p>Job Title: {one.title}</p>
          <p>Company: {one.company}</p>
          <p>Location: {one.location}</p>
        </div>
        </Link>
        <br/>
        </div>)
    })
    return(
        <div>
            {favlst}
        </div>
    )
}