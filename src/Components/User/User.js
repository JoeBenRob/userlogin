import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function User(props) {

    let handleSubmit = () => {
        axios.delete(`http://localhost:5000/user/deleteUser/` + props._id)
            .then(res => props.getData())
    }

    return (
        <div>
            <h4>{props.username}</h4>
            <button name="test"><Link to={props.username}>More</Link></button>
            <button onClick={handleSubmit}>Delete</button>

        </div>
    );
}

export default User;
