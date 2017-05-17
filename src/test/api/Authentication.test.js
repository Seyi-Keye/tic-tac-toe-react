import { expect } from 'chai';
import { Authentication } from '../../api/Authentication';

describe('Authentication Service Api' , () => {
  it('returns successful on valid email and password', () => {
    expect(Authentication.validityChecker('abc@gmail.com', 'abc')).to.equal('Successful');
  });

  it('returns error on invalid email', () => {
    expect(Authentication.validityChecker('abc@gmailcom', 'abc')).to.equal('Invalid');
  });
});

describe('Authentication email checker', () => {
  it('returns error on empty email', () => {
    expect(Authentication.emailChecker('')).to.equal('Email cannot be empty');
  });

  it('returns error on invalid email', () => {
    expect(Authentication.emailChecker('abc.com')).to.equal('Invalid email address');
  });
});

describe('Authentication password checker', () => {
  it('returns error on empty password', () => {
    expect(Authentication.passwordChecker('')).to.equal('Password cannot be empty');
  });

  it('returns error on invalid password', () => {
    expect(Authentication.passwordChecker('a')).to.equal('Invalid password, length of 3 at least');
  });
});
