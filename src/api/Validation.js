import localforage from 'localforage';
let errorArray = [];

export class Validation {

  static validationChecker(email, password, firstName, lastName) {
    const validEmail = Validation.emailChecker(email);
    const validPassword = Validation.lengthChecker(password, 'password');
    const validFirstName = Validation.lengthChecker(firstName, 'firstname');
    const validLastName = Validation.lengthChecker(lastName, 'lastname');
    if (validEmail && validPassword && validFirstName && validLastName) {
      return {
        status: 'Successful',
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        score: 0
      };
    }
    return Validation.errors();
  }

  static lengthChecker(field = '', fieldName = '') {
    const trimedfield = field.trim();
    if (!trimedfield.length) {
      errorArray.push(`${fieldName} cannot be empty`);
      return false;
    }
    if (trimedfield.length < 3) {
      errorArray.push(`Invalid ${fieldName}, length of 3 at least`);
      return false;
    }
    return true;
  }

  static emailChecker(email) {
    if (!email.length) {
      errorArray.push('email cannot be empty');
      return false;
    }
    if (!(/\b[a-zA-Z0-9_]+@[a-z]+\.com\b/.test(email))) {
       errorArray.push('Invalid email address');
      return false;
    }
    return true;
  }

  static errors() {
    return errorArray.reduce((acc, error) => {
      acc = acc + error + '\n';
      return acc;
    }, '');
  }
}
