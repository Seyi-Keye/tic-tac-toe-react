import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { NavBar } from '../../components/NavBar';
// import { SignOut } from '../../components/SignOut';

let wrapper;

describe('<NavBar />', () => {
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it('contains a div', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('contains a nav', () => {
    expect(wrapper.find('nav')).to.have.length(1);
  });


  it('renders the <SignOut /> Component', () => {
  expect(wrapper.find('button')).to.have.length(1);
  });
})