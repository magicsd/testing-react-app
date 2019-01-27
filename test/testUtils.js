import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import { middlewares} from '../src/store';
import rootReducer from '../src/reducers/index';

export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, props) => {
  const propError = checkPropTypes(
    component.propTypes,
    props,
    'prop',
    component.name
  );

  expect(propError).toBeUndefined();
};

export const storeFactory = (initialState) => (
  applyMiddleware(...middlewares)(createStore)(rootReducer, initialState)
);