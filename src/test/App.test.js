import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App';
import { NavBar } from '../components/NavBar';

let wrapper;

describe('<App />', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
  expect(wrapper.find('div')).to.have.length(1);
  expect(wrapper.find('.App')).to.have.length(1);
  });

  it('renders the <Registration /> Component', () => {
  expect(wrapper.find('Registration')).to.have.length(1);
});

it('renders the <NavBar /> Component', () => {
  expect(wrapper.find('NavBar')).to.have.length(1);
  });
})

