import axios from 'axios';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './LogIn.css';
import { useNavigate } from 'react-router'; 


function Register(props) {

    const [userData, setUserData] = useState({
        username: '',
        password: '',
        verifyPassword: '',
    });

    
    const navigate = useNavigate();
    function tryRegister () {
        axios.post('http://localhost:8000/api/users/register', userData)
                .then((registerResponse) => {
                    console.log(registerResponse);
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
                <Link to="/login">
                <button>Log In</button>
                </Link>
                <Link to="/favorite">
                <button>Favorite</button>
                </Link>
            </div>

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