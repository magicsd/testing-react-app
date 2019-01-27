import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import App from '../components/App';
import {storeFactory} from '../../test/testUtils';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe('App component', () => {
  test('Renders without error', () => {
    const div = document.createElement('div');
    const store = storeFactory();
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

