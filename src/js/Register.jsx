import axios from 'axios';
import React, {useState} from 'react'
import Nav from "./Nav";
import "../css/LogIn.css";
import { useLocation, useNavigate } from 'react-router'; 


function Register(state) {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        verifyPassword: '',
    });

    // const [loggedInName, setLoggedInName] = useState('');

   
    // function displayUsername() {
    //     axios.get("localhost:8000/api/jobs/get/whoIsLoggedIn")
    //     .then(response => setLoggedInName(response))
    //     .catch(error => console.log(error));
    // }
    
    const navigate = useNavigate();
    function tryRegister () {
        axios.post('http://localhost:8000/api/users/register', userData)
                .then((registerResponse) => {
                    navigate('/userLogged', {state: registerResponse.data.username});
                    })
                .catch(error => console.log(error));    
    }

    return (
        <div className="page">
        <Nav type = "register"/> 

        <div className = "contain">
            <div className="job-finder">
                Register new account
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

            <div className = "username">
                Verify Password:
            </div>
            <div className = "input-box">
            <input type='text' value={userData.verifyPassword} onChange={(e) => {
                const verifyPassword = e.target.value;
                setUserData({
                    ...userData,
                    verifyPassword: verifyPassword
                })
            }} type='password' />
            </div>
            <button onClick={tryRegister}>Register</button>

        </div>
        </div>    
    );
}

export default Register