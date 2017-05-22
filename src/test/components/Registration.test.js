import React from 'react';
import { Registration } from '../../components/Registration';
import { shallow } from 'enzyme';
import localforage from 'localforage';
import { expect } from 'chai';
import sinon from 'sinon';
let wrapper;

describe('Describe <Registration /> Component : ', () => {
  beforeEach(() => {
    wrapper = shallow(<Registration />);
  });

  it('should contain a form', () => {
    expect(wrapper.find('form')).to.have.length(1);
  });

  it('should contain 4 input tags', () => {
    expect(wrapper.find('input')).to.have.length(4);
  });

  const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  it('should contain 4 states initially', () => {
    expect(wrapper.state()).to.have.length(4);
  });
});

describe('Describe <Registration /> Component with Validation Service: ', () => {
  it('should call Validate Service', () => {
    const handleRegistrationSpy = sinon.spy(Registration.prototype, 'handleRegistration');

    wrapper = shallow(<Registration />);
    // expect(wrapper.find('form')).to.have.length(1);
  });

  it('should save suceessful details to localforage', () => {
    expect(wrapper.state()).to.have.length(4);
  });
});