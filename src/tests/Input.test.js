import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from '../components/Input';

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
      test('Renders without error', () => {

      });

      test('Renders no input box', () => {

      });

      test('Renders no submit button', () => {

      });
    });
  });

  describe('Update the state', () => {
    test('', () => {

    });
  });
});