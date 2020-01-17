import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('You clicked 0 times');
  });

  it('Loads data from api', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('ul').text();
    expect(text).not.toMatch('');
  });

});










// let container;

// beforeEach(() => {
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   document.body.removeChild(container);
//   container = null;
// });

// it('can render and update a counter', () => {
//   // Test first render and componentDidMount
//   act(() => {
//     ReactDOM.render(<App />, container);
//   });
//   const button = container.querySelector('button');
//   const label = container.querySelector('p');
//   expect(label.textContent).toBe('You clicked 0 times');
//   expect(document.title).toBe('You clicked 0 times');

//   // Test second render and componentDidUpdate
//   act(() => {
//     button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
//   });
//   expect(label.textContent).toBe('You clicked 1 times');
//   expect(document.title).toBe('You clicked 1 times');
// });