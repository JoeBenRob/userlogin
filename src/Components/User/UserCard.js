import React from 'react';
import { Container } from 'reactstrap';

function UserCard(props) {

    return (
        <Container >
            <div className="App-header">
                <header>{props.username}</header>
            </div>
            <p>Email: {props.email}</p>
        </Container >
    );
}

export default UserCard;