import axios from 'axios';
import React, {useState} from 'react';
import Nav from './Nav';
import "../css/LogIn.css";
import { useNavigate } from 'react-router'; 


function LogIn(props) {

    const [userData, setUserData] = useState({
        password: '',
        username: '',
    });

   
    const navigate = useNavigate();
    function tryLogin () {
        axios.post('http://localhost:8000/api/users/login', userData)
                .then((loginResponse) => {
                    // console.log(loginResponse);
                    navigate('/userLogged', {state: loginResponse.data.username});
                })
                .catch(error => console.log(error));    
    }
    

    return (
        <div className="page">
        <Nav type = "login"/>
        <div className = "contain">
            <div className="job-finder">
                JobFinder
            </div>
            <div className = "username">
                Username:
            </div>
            <div className = "input-box">
            <input type='text' value={userData.username} onChange={(e) => {
                const username = e.target.value;
                setUserData({
                    ...userData,
                    username: username
                })
            }}/>
            </div>

            <div className = "username">
                Password:
            </div>
            <div className = "input-box">
            <input type='text' value={userData.password} onChange={(e) => {
                const password = e.target.value;
                setUserData({
                    ...userData,
                    password: password
                })
            }} type='password' />
            </div>

            <button onClick={tryLogin}>Login</button>
           
        </div>
        </div>    
    );
}

export default LogIn