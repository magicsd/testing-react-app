import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { store } from './store'
import App from 'components/App';
import 'sass/index.scss'

const render = (Component) => {
  ReactDOM.render((
    <Provider store={store}>
      <Component />
    </Provider>
  ), document.getElementById('root'));
};

render(App);

if (module.hot) {
  module.hot.accept('components/App', () => {
    render(App);
  });
}