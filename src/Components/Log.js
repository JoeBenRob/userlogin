import React, { Component } from 'react';
import axios from "axios";


class Log extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: "",
            message: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ error: "" })
        let post = {
            username: event.target[0].value,
            password: event.target[2].value,
        };

        if (post.username === "" || post.password === "") {
            this.setState({ error: "username doesn't exist" })
        }
        axios.get("http://localhost:5000/user/name/" + event.target[0].value + "/" + event.target[1].value)
            .then(res => {
                console.log(res.data.Status)
                if (res.data.Status === "Logged In")
                    this.setState({ message: "Signed in as: " + post.username })
                else
                    this.setState({ error: "Incorrect details" })
            })
    }

    render() {
        return (
            <div>
                <div className="CreateForm">
                    <form onSubmit={this.handleSubmit}>
                        <label>Username: <input type="text" name="name" /></label>
                        <br />
                        <label>Password: <input type="password" name="password" /></label>
                        <br />
                        <button type="submit">Login</button>
                        <p style={{ color: 'red' }}>{this.state.error}</p>
                        <p>{this.state.message}</p>

                    </form>
                </div >
            </div >
        );
    }
}

export default Log;