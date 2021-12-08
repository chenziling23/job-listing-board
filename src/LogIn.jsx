import axios from 'axios';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './LogIn.css';
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
                    console.log(loginResponse);
                    navigate('/');
                })
                .catch(error => console.log(error));    
    }
    

    return (
        <div className="page">
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
            </div>

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