import { expect } from 'chai';
import { Validation } from '../../api/Validation';

describe('Validation Service Api' , () => {
  it(`returns successful on valid email, password, firstname and lastname`,
  () => {
    expect(Validation.validationChecker('abc@gmail.com', 'abc',
    'abc', 'abc')).to.deep.equal({
      status: 'Successful',
      email: 'abc@gmail.com',
      firstName: 'abc',
      lastName: 'abc',
      score: 0
    });
  });

  it('returns error on invalid detail', () => {
    expect(Validation.validationChecker('abc@gmailcom',
    'abc')).to.contain('Invalid email address');
    expect(Validation.validationChecker('abc@gmailcom',
    'abc')).to.contain('firstname cannot be empty');
    expect(Validation.validationChecker('abc@gmailcom',
    'abc')).to.contain('lastname cannot be empty');
  });
});

describe('Validation email checker', () => {
  it('returns error on empty email', () => {
    expect(Validation.emailChecker('', 'email')).to.equal(false);
    expect(Validation.errors()).to.contain('email cannot be empty');
  });

  it('returns error on invalid email', () => {
    expect(Validation.emailChecker('abc.com')).to.equal(false);
    expect(Validation.errors()).to.contain('Invalid email address');
  });

  it('returns email on valid email', () => {
    expect(Validation.emailChecker('abc@gmail.com'))
    .to.equal(true);
  });
});

describe('Validation password checker', () => {
  it('returns error on empty password', () => {
    expect(Validation.lengthChecker('', 'password')).to.equal(false);
    expect(Validation.errors()).to.contain('password cannot be empty');
  });

  it('returns error on invalid password', () => {
    expect(Validation.lengthChecker('a', 'password')).to.equal(false);
    expect(Validation.errors()).to.contain('Invalid password, length of 3 at least');
  });
});

describe('Validation firstname checker', () => {
  it('returns error on empty firstname', () => {
    expect(Validation.lengthChecker('', 'firstname')).to.equal(false);
    expect(Validation.errors()).to.contain('firstname cannot be empty');
  });

  it('returns error on invalid firstname', () => {
    expect(Validation.lengthChecker('a', 'firstname')).to.equal(false);
    expect(Validation.errors()).to.contain('Invalid firstname, length of 3 at least');
  });
});

describe('Validation lastname checker', () => {
  it('returns error on empty lastname', () => {
    expect(Validation.lengthChecker('', 'lastname')).to.equal(false);
    expect(Validation.errors()).to.contain('lastname cannot be empty');
  });

  it('returns false on invalid lastname', () => {
    expect(Validation.lengthChecker('a', 'lastname')).to.equal(false);
    expect(Validation.errors()).to.contain('Invalid lastname, length of 3 at least');
  });
});

describe('Validation clearErrors function', () => {
  it('contains empty errorArray', () => {
    expect(Validation.clearErrors()).to.deep.equal([]);
  });
});

describe('Validation errors function', () => {
  it('returns accumulated error', () => {
    expect(Validation.errors()).to.equal('');
  });
});
