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

  it('should contain a button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });

  const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  it('should contain 4 states initially', () => {
    expect(wrapper.state()).to.deep.equal(initialState);
  });

  it('should call handleChange', () => {
    const handleChangeSpy = sinon.spy(Registration.prototype, 'handleChange');

    wrapper = shallow(<Registration />);
    wrapper
      .find('input')
      .first()
      .simulate('change', {
        target: {
          name: 'email',
          value: 'seyi@gmail.com',
        },
      });
    expect(handleChangeSpy.calledOnce)
      .to
      .equal(true);
    handleChangeSpy.reset();
  });
});

describe('Describe <Registration /> Component with Validation Service: ', () => {
  it('should fire handleSubmit', () => {
    const handleSubmitSpy = sinon.spy(Registration.prototype, 'handleSubmit');

    wrapper = shallow(<Registration />);

    wrapper
      .find('form')
      .first()
      .simulate('submit', {
        target: {
          name: 'email',
          value: 'seyi@gmail.com',
        },
        preventDefault: () => null,
      });
    expect(handleSubmitSpy.calledOnce).to.equal(true);
  });

  it('fires handleError once', () => {
  const handleErrorSpy = sinon.spy(Registration.prototype, 'handleError');
    wrapper = shallow(<Registration />);

    wrapper
      .find('form')
      .first()
      .simulate('submit', {
        target: {
          email: 'email',
          value: 'seyi@gmail.com',
        },
        preventDefault: () => null,
      });
    expect(handleErrorSpy.calledOnce).to.equal(true);
  });

  it('fires handleStorage once', () => {
  const handleStorageSpy = sinon.spy(Registration.prototype, 'handleStorage');
    wrapper = shallow(<Registration />);
    wrapper.setState({ email: "seyi@gmail.com", password: "password", firstName: "Oluwaseyi", lastName: "Aromokeye" })
    wrapper
      .find('form')
      .first()
      .simulate('submit', {
        preventDefault: () => null,
      });
    expect(handleStorageSpy.calledOnce).to.equal(true);
  });

  it('should save suceessful details to localforage', () => {
    const localforageSpy = sinon.spy(localforage, "setItem");
    wrapper = shallow(<Registration />);
    wrapper.instance().handleStorage('fakedata')
    expect(localforageSpy.calledWith('profile', 'fakedata')).to.equal(true);
    localforageSpy.reset();
  });
});