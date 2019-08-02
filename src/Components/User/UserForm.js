import React, { Component } from 'react';
import axios from "axios";

class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            password2: "",
            error: "",
            message: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ message: "" });
        this.setState({ error: "" });
        if (this.props.log === true) {
            let post = {
                username: event.target[0].value,
                email: event.target[1].value,
                password: event.target[2].value,
                password2: event.target[3].value,
            };

            if (post.username === "" || post.email === "" || post.password === "" || post.password2 === "") {
                this.setState({ error: "Ensure you have filled the fields out correctly" })
            } else {

                axios.post(`http://localhost:5000/user/createUser`, post)
                    .then(res => {
                        if (res.data.password === "Password field is required" || res.data.password === "Passwords do not match") {
                            this.setState({ error: res.data.password })
                        }
                        else if (res.data.email === "Email field is required" || res.data.email === "Email is invalid") {
                            this.setState({ error: res.data.email })
                        }
                        else if (res.data.username === "Username field is required") {
                            this.setState({ error: res.data.username })
                        }
                        else {
                            this.setState({ message: "User '" + res.data.username + "' created" });
                        }
                        this.props.getData();
                    })
            }
        } else { this.setState({ error: "you must be logged in to create a user" }) }

    }

    render() {
        return (
            <div>
                <div className="App-header">
                    <header>User Sign up</header>
                </div>
                <div className="CreateForm">
                    <form onSubmit={this.handleSubmit}>
                        <label>Username: <input type="text" name="name" /></label>
                        <br />
                        <label>Email: <input type="text" name="name" /></label>
                        <br />
                        <label>Password: <input type="password" name="password" /></label>
                        <br />
                        <label>Password Confirmation: <input type="password" name="password" /></label>
                        <br />
                        <button type="submit">Post</button>
                        <br />
                        <p style={{ color: 'red' }}>{this.state.error}</p>
                        <p>{this.state.message}</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserForm;