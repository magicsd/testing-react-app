import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const setup = (props = {}, state = null) => (
  shallow(<App {...props} />)
);

const findByTestAttr = (wrapper, value) => (
  wrapper.find(`[data-test="${value}"]`)
);

describe('Test <App /> component', () => {
  let wrapper;
  beforeEach(() => {
     wrapper = setup();
  })

  test('Renders without error', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');

    expect(appComponent.length).toBe(1);
  });

  test('Renders increment button', () => {
    const button = findByTestAttr(wrapper, 'increment-button');

    expect(button.length).toBe(1);
  });

  test('Renders counter display', () => {
    const counter = findByTestAttr(wrapper, 'counter-display');

    expect(counter.length).toBe(1);
  });
})
