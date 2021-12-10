import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from 'react-router-dom';


export default function Favorite(){
    const [fav, setFav] = useState([])
    function getFavorite () {
        axios.get('http://localhost:8000/api/jobs/find/favoriteLst')
                .then((registerResponse) => setFav(registerResponse.data))
                .catch(error => console.log(error));    
    }

    useEffect(getFavorite,[])

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