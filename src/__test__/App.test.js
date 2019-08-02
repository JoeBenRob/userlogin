import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('snapshot App', () => {
  // const wrapper = shallow(<App />);
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot();
})