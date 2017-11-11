import React from 'react';
import Login from '../Login.jsx';
import { mount } from 'enzyme';

test('Check Hello World text.', () => {
  const wrapper = mount(<Login />);

  expect(
    wrapper
      .find('#helloWorld')
      .text()
  ).toBe('Hello World!');
});