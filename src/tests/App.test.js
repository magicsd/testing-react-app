import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../components/App';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

test('Renders without error', () => {

});
