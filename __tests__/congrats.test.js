/**
 * @format
 */
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'

import {findByTestAttr}  from '../testUtils';
import Congrats from '../src/Congrats';

Enzyme.configure({adapter: new EnzymeAdapter()})

/**
 * Factory function to create a ShallowWrapper for the congrat components
 * @function setup
 * @param {Object} props - Component props to specfific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props={}) => {
  return shallow(<Congrats {...props} />)
} 

test('renders withour error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1)
});

test('renders no txt when `success` props is false', () => {
  const wrapper = setup({success: false});
  const message = findByTestAttr(wrapper, 'component-congrats');
  expect(message.first().props().children).toBe(undefined)
});

test('renders no-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({success: true});
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.first().props().children).toBe('Congratulations!')
  // console.log(message.container('').debug());`
});
