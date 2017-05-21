import { expect } from 'chai';
import { Validation } from '../../api/Validation';

describe('Validation Service Api' , () => {
  it(`returns successful on valid email, password, firstname and lastname`, () => {
    expect(Validation.validationChecker('abc@gmail.com', 'abc', 'abc', 'abc')).to.deep.equal({
      status: 'Successful',
      email: 'abc@gmail.com',
      password: 'abc',
      firstName: 'abc',
      lastName: 'abc',
      score: 0
    });
  });

  it('returns error on invalid detail', () => {
    expect(Validation.validationChecker('abc@gmailcom', 'abc')).to.contain('Invalid email address');
  });
});

describe('Validation email checker', () => {
  it('returns error on empty email', () => {
    expect(Validation.emailChecker('', 'email')).to.contain('email cannot be empty');
  });

  it('returns error on invalid email', () => {
    expect(Validation.emailChecker('abc.com')).to.contain('Invalid email address');
  });

  it('returns email on valid email', () => {
    expect(Validation.emailChecker('abc@gmail.com')).to.contain('abc@gmail.com');
  });
});

describe('Validation password checker', () => {
  it('returns error on empty password', () => {
    expect(Validation.lengthChecker('', 'password')).to.contain('password cannot be empty');
  });

  it('returns error on invalid password', () => {
    expect(Validation.lengthChecker('a', 'password')).to.contain('Invalid password, length of 3 at least');
  });
});

describe('Validation firstname checker', () => {
  it('returns error on empty firstname', () => {
    expect(Validation.lengthChecker('', 'firstname')).to.contain('firstname cannot be empty');
  });

  it('returns error on invalid firstname', () => {
    expect(Validation.lengthChecker('a', 'firstname')).to.contain('Invalid firstname, length of 3 at least');
  });
});

describe('Validation lastname checker', () => {
  it('returns error on empty lastname', () => {
    expect(Validation.lengthChecker('', 'lastname')).to.contain('lastname cannot be empty');
  });

  it('returns error on invalid lastname', () => {
    expect(Validation.lengthChecker('a', 'lastname')).to.contain('Invalid lastname, length of 3 at least');
  });
});
