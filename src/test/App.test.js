import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App';
let wrapper;

describe('<App />', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
  expect(wrapper.find('div')).to.have.length(1);
  expect(wrapper.find('.App')).to.have.length(1);
  });

  it('renders the hello world', () => {
  expect(wrapper.find('h2')).to.have.length(1);
  expect(wrapper.text()).to.equal('Hello World');
  });
})

