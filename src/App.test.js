import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enzymeToJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);
  // const wrapper = shallow(<App />, {context: {}, disableLifecycleMethods: bool});
  it('should contain 1 p element', () => {
    // console.log(wrapper.debug());
    // expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('.App-intro').exists()).toBe(true);
  });
  it('should contain ul element with lis', () => {
    expect(wrapper.find('ul').children().length).toBe(3);
  });
  it('should contain h1 element with correct text', () => {
    expect(wrapper.find('h1').text()).toBe('Welcome to React');
  });
  it('matches the snapshot', () => {
    const tree = shallow(<App />);
    expect(enzymeToJson(tree)).toMatchSnapshot();
  });
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });