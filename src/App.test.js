import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);

  if (state) {
    wrapper.setState(state);
  }

  return wrapper;
};

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

  test('Counter starts at 0', () => {
    const initialCounterState = wrapper.state('counterValue');

    expect(initialCounterState).toBe(0);
  });

  test('Clicking the button increments counter display', () => {
    const counterValue = 7;
    wrapper.setState({ counterValue });

    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');
    wrapper.update();

    const counterStateValue = wrapper.state('counterValue');

    expect(counterStateValue).toBe(counterValue + 1);

    const counterDisplay = findByTestAttr(wrapper, 'counter-display');

    expect(counterDisplay.text()).toContain(counterValue + 1);
  });

  test('Renders decrement button', () => {
    const button = findByTestAttr(wrapper, 'decrement-button');

    expect(button.length).toBe(1);
  });

  test('Decrement button decreases counter in state and counterDisplay', () => {
    const initialCounterValue = 3;
    wrapper.setState({counterValue: initialCounterValue});
    const button = findByTestAttr(wrapper, 'decrement-button');
    button.simulate('click') ;
    wrapper.update();

    const updatedCounterValue = wrapper.state('counterValue');

    expect(updatedCounterValue).toBe(initialCounterValue - 1);

    const counterDisplay = findByTestAttr(wrapper, 'counter-display');

    expect(counterDisplay.text()).toContain(initialCounterValue -1);
  });

  test('Decrement below zero is not allowed', () => {
    const initialCounterValue = 0;

    wrapper.setState({ counterValue: initialCounterValue });

    const decrementButton = findByTestAttr(wrapper, 'decrement-button');
    decrementButton.simulate('click');
    wrapper.update();

    const updatedCounterValue = wrapper.state('counterValue');

    expect(updatedCounterValue).toBe(initialCounterValue);
  });

  test('Show error message when try to decrement below zero', () => {
    const initialCounterValue = 0;

    wrapper.setState({ counterValue: initialCounterValue });

    const decrementButton = findByTestAttr(wrapper, 'decrement-button');
    decrementButton.simulate('click');
    wrapper.update();

    const errorMessage = findByTestAttr(wrapper, 'error-message');

    expect(errorMessage.length).toBeTruthy();
    expect(errorMessage.text()).toBe('The counter can not go below zero.');
  });

  test('Error message is removed when increment button is clicked', () => {
    wrapper.setState({ counterValue: 0 });
    const decrementButton = findByTestAttr(wrapper, 'decrement-button');
    decrementButton.simulate('click');

    let errorMessage = findByTestAttr(wrapper, 'error-message');

    expect(errorMessage.length).toBeTruthy();

    const incrementButton = findByTestAttr(wrapper, 'increment-button');
    incrementButton.simulate('click');

    errorMessage = findByTestAttr(wrapper, 'error-message');

    expect(errorMessage.length).toBe(0);
  });
})
