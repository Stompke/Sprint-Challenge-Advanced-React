import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';


describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
    it('should render one <h1>', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('h1')).toHaveLength(1);
  });
  
    it('should render one <Players />', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('Players')).toHaveLength(1);
  });

})




describe('Player component', () => {
  it('can render the Dark Mode Switch Button', () => {
    // Test first render and componentDidMount
    ReactDOM.render(<App />, container);
    const button = container.querySelector('button');
    // const label = container.querySelector('p');
    expect(button.textContent).toBe('Dark Mode Switch');
    // expect(document.title).toBe('You clicked 0 times');
  
    // Tests button name change on click
  });
  
  it('Button Changes text when clicked', () => {

      ReactDOM.render(<App />, container);
      const button = container.querySelector('button');
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}));

      expect(button.textContent).toBe('Dark Mode Switch - ON');

  })
});










let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});



