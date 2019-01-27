import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from '../components/Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount((
    <Provider store={store}>
      <Input />
    </Provider>
  ));
  return wrapper;
};

describe('Test Input Component', () => {
  describe('Render', () => {
    describe('Word has not been guessed', () => {
      test('Renders without error', () => {

      });

      test('Renders the input box', () => {

      });

      test('Renders submit button', () => {

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