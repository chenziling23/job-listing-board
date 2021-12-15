import axios from 'axios';
import React, {useState} from 'react';
import Nav from './Nav';
import "../css/LogIn.css";
import { useNavigate } from 'react-router'; 
// import { useHistory } from "react-router-dom";


function LogIn(props) {

    const [userData, setUserData] = useState({
        password: '',
        username: '',
    });
    const [error, setError] = useState("");

   
    const navigate = useNavigate();
    // const history = useHistory();
    function tryLogin () {
        axios.post('/api/users/login', userData)
                .then((loginResponse) => {
                    // history.goBack();
                    navigate('/userLogged', {state: loginResponse.data.username});
                })
                .catch(e => setError(e.response.data));    
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
                <p>{error}</p>
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