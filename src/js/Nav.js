import React from "react";
import "../css/Nav.css";
import { Link } from 'react-router-dom';
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Dropdown } from "react-bootstrap";

export default function Nav(props){
    const [name, setName] = useState("")
    function checkLogin() {
        axios.get('/api/users/whoIsLoggedIn')
            .then((res) => setName(res.data))
            .catch(() => navigate('/logIn'))
      }

    useEffect(checkLogin,[]);
    const navigate = useNavigate();
    if (props.type === "HomePage") {
        return(
            <div>
            <Link to="/login">
                <button>Log In</button>
            </Link>
            <Link to="/register">
                <button>Register</button>
            </Link>
            <Link to="/favorite">
                <button>Favorite Page</button>
            </Link>   
            </div>
        )
    }else if (props.type === "login") {
        return(
            <div>
                <Link to="/">
                <button>Home</button>
                </Link>
                <Link to="/register">
                <button>Register</button>
                </Link>
            </div>
        )
    }else if(props.type === "logged") {
        // return(
        //     <>
        //     <Try></Try>
        //     </>
        // )
        return (
            <div class = "logged">
                <div>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                    <button onClick={
                        () => axios.post('/api/users/logout')
                        .then(() => {
                            navigate('/');
                        })
                        .catch(console.error)
                    }>Logout</button>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                    <Link to="/favorite">
                    <button>Favorite</button>
                    </Link>
                    <Link to="/postJob">
                    <button>Post Job</button>
                    </Link>
                    <Link to="/myList">
                    <button>My List</button>
                    </Link>
                </div>
                {/* <div>
                <button id = "user">{name}</button>
                </div> */}
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Setting</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
        )
    }else if (props.type === "register"){
        return(<div>
                <Link to="/">
                <button>Home</button>
                </Link>
                <Link to="/login">
                <button>Log In</button>
                </Link>
            </div>)
    }
}