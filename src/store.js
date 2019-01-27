import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers/index';

const logger = createLogger({});

export const middlewares = [ReduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddleware(rootReducer);
