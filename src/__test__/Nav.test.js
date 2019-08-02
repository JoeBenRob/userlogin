import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import Nav from '../Components/Nav/Nav';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Nav />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
    shallow(<Nav />);

});