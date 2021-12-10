import React from "react";
import "../css/Nav.css";
import { Link } from 'react-router-dom';

export default function Nav(props){
    if (props.type === "HomePage") {
        return(
            <div>
            <Link to="/login">
                <button>Log In</button>
            </Link>
            <Link to="/register">
                <button>Register</button>
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
                    <Link to="/">
                        <button>Logout</button>
                    </Link>
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
                    <button> my list</button>
                    </Link>
                </div>
                <div>
                <button id = "user">{props.info}</button>
                </div>
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
                <Link to="/favorite">
                <button>Favorite</button>
                </Link>
            </div>)
    }
}