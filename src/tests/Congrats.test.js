import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from '../components/Congrats';
import { findByTestAttr } from '../../test/testUtils';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

const setup = (props = {}) => shallow(<Congrats {...props} />);

describe('Congrats component', () => {
  test('Renders without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
  });

  test('Renders no text if "success" prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
  });

  test('Renders non empty if "success" prop is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).toBeTruthy();
  });
});
