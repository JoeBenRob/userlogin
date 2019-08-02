import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UserForm from '../User/UserForm';
import UserList from '../User/UserList';
import UserCard from '../User/UserCard';
import Log from '../Log';

class Nav extends Component {

    constructor() {
        super();
        this.state = {
            data: []

        };
    }

    getData = () => {
        axios.get("http://localhost:5000/user/all").then(response => {
            this.setState({
                data: response.data
            })
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div >
                <Router >
                    <div>
                        <Log getData={this.getData} />
                        <ul>
                            <button><Link to="/UserForm">User Creation</Link></button>
                            <button><Link to="/UserList">User List</Link></button>
                        </ul>
                        <Route path="/UserList" render={() => <UserList getData={this.getData} data={this.state.data} />} />
                        <div>
                            <Route exact path="/UserForm" render={(props) =>
                                <UserForm getData={this.getData} />} />

                            {this.state.data.map((item, index) => (
                                <div key={index}>
                                    <Route path={"/" + item.username} render={(props) =>
                                        <UserCard getData={this.getData}
                                            username={item.username}
                                            email={item.email}
                                        />} />
                                </div>
                            ))}
                        </div>
                    </div>
                </Router>
            </div >
        )
    }
}
export default Nav;