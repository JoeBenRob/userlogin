import React from 'react';
import { Table } from 'reactstrap';

import User from './User'

function UserList(props) {
    return (
        <div>
            <div className="App-header">
                <header>User List</header>
            </div>
            <Table >
                <tbody>
                    {props.data.map((user, index) => (
                        <tr key={index}>
                            <td>
                                <User getData={props.getData}
                                    username={user.username}
                                    email={user.email}
                                    _id={user._id}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div >
    );
}

export default UserList;