import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input, { UnconnectedInput } from '../components/Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);

  return mount((
    <Provider store={store}>
      <Input />
    </Provider>
  ));
};

describe('Test Input Component', () => {
  describe('Render', () => {
    describe('Word has not been guessed', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = setup({ success: false });
      });

      test('Renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-input');
        expect(component.length).toBe(1);
      });

      test('Renders the input box', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.length).toBe(1);
      });

      test('Renders submit button', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.length).toBe(1);
      });
    });

    describe('Word has been guessed', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = setup({ success: true });
      });

      test('Renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-input');
        expect(component.length).toBe(1);
      });

      test('Renders no input box', () => {
        const input = findByTestAttr(wrapper, 'input-box');
        expect(input.length).toBe(0);
      });

      test('Renders no submit button', () => {
        const submit = findByTestAttr(wrapper, 'submit-button');
        expect(submit.length).toBe(0);
      });
    });
  });

  describe('Test action creators', () => {
    describe('Test guessWord', () => {
      let guessWordMock;
      let wrapper;

      beforeEach(() => {
        guessWordMock = jest.fn();
        wrapper = shallow(
          <UnconnectedInput
            success={false}
            guessWord={guessWordMock}
          />
        )
      });

      // It was valid until validation checks applied
      // test('guessWord is called on submit button click', () => {
      //   const submitButton = findByTestAttr(wrapper, 'submit-button');
      //   submitButton.simulate('click', { preventDefault: () => {} });
      //   expect(guessWordMock.mock.calls.length).toBe(1);
      // });

      test('guessWord is called with input box contents as argument', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        const guessWord = 'train';
        inputBox.simulate('change', { target: { value: guessWord} });
        const state = wrapper.state();
        expect(state).toEqual({ inputValue: guessWord });
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault: () => {} });
        expect(guessWordMock.mock.calls.length).toBe(1);
        expect(guessWordMock.mock.calls[0][0]).toBe(guessWord);
      });

      test('Input Box is cleared after submit button click', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        inputBox.simulate('change', { target: { value: 'train'} });
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault: () => {} });
        const state = wrapper.state();
        expect(state).toEqual({ inputValue: '' });
      });
    })
  });
});