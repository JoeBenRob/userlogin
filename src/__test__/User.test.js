import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import User from '../Components/User/User';
import UserCard from '../Components/User/UserCard';
import UserForm from '../Components/User/UserForm';
import UserList from '../Components/User/UserList';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<User />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserCard />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserForm />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserList />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    shallow(<User />);

});
it('renders without crashing', () => {
    shallow(<UserCard />);

});
it('renders without crashing', () => {
    shallow(<UserForm />);

});

it('renders without crashing', () => {
    shallow(<UserList />);

});