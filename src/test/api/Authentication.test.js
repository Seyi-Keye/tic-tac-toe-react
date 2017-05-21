import { expect } from 'chai';
import { Validation } from '../../api/Validation';

describe('Validation Service Api' , () => {
  it(`returns successful on valid email, password, firstname and lastname`, () => {
    console.log('======>>', Validation.validationChecker('abc@gmail.com', 'abc', 'abc', 'abc'))
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
    console.log('+++++++>', Validation.validationChecker('abc@gmailcom', 'abc', 'abc', 'abc'))
    expect(Validation.validationChecker('abc@gmailcom', 'abc')).to.equal('Invalid email address');
  });
});

describe('Validation email checker', () => {
  it('returns error on empty email', () => {
    expect(Validation.emailChecker('')).to.equal('email cannot be empty');
  });

  it('returns error on invalid email', () => {
    expect(Validation.emailChecker('abc.com')).to.equal('Invalid email address');
  });

  it('returns email on valid email', () => {
    expect(Validation.emailChecker('abc@gmail.com')).to.equal('abc@gmail.com');
  });
});

describe('Validation password checker', () => {
  it('returns error on empty password', () => {
    expect(Validation.lengthChecker('', 'password')).to.equal('password cannot be empty');
  });

  it('returns error on invalid password', () => {
    expect(Validation.lengthChecker('a', 'password')).to.equal('Invalid password, length of 3 at least');
  });
});

describe('Validation firstname checker', () => {
  it('returns error on empty firstname', () => {
    expect(Validation.lengthChecker('', 'firstname')).to.equal('firstname cannot be empty');
  });

  it('returns error on invalid firstname', () => {
    expect(Validation.lengthChecker('a', 'firstname')).to.equal('Invalid firstname, length of 3 at least');
  });
});

describe('Validation lastname checker', () => {
  it('returns error on empty lastname', () => {
    expect(Validation.lengthChecker('', 'lastname')).to.equal('lastname cannot be empty');
  });

  it('returns error on invalid lastname', () => {
    expect(Validation.lengthChecker('a', 'lastname')).to.equal('Invalid lastname, length of 3 at least');
  });
});
