import axios from 'axios';
import React from 'react';
import {useNavigate} from 'react-router-dom';


function Logout(props) {

    const navigate = useNavigate();

    return (
        <button onClick={() => axios.post('http://8000/api/users/logout')
            .then(() => {
                navigate('/');
            })
            .catch(console.error)
            }>Logout</button>
    );
    
    
}

export default Logout