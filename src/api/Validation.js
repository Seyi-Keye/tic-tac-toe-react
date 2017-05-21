import localforage from 'localforage';

export class Validation {

  static validationChecker(email, password, firstName, lastName){
    let errorArray = [];
    const validEmail = Validation.emailChecker(email);
    const validPassword = Validation.lengthChecker(password, 'password');
    const validFirstName = Validation.lengthChecker(firstName, 'firstname');
    const validLastName = Validation.lengthChecker(lastName, 'lastname');
    // if((validEmail === email) && (validPassword ===password) && (validFirstName === firstName) && (validLastName === lastName)) {
      if(validEmail && validPassword && validFirstName && validPassword) {
      return { status: 'Successful', email: validEmail, password: validPassword, firstName: validFirstName, lastName: validLastName, score: 0 };
    }
    return 'Invalid';
  }

  static lengthChecker(field, fieldName){
    const trimedfield = field.trim();
    if(!trimedfield.length) return `${fieldName} cannot be empty`;
    if(trimedfield.length < 3) return `Invalid ${fieldName}, length of 3 at least`;
    return trimedfield;
  }

  static emailChecker(email){
    if (!email.length) return 'Email cannot be empty';
    return /\b[a-zA-Z0-9_]+@[a-z]+\.com\b/.test(email) ? email : 'Invalid email address';
  }

  static errors(errorArray) {
    errorArray.map((error) => {
      return error;
    });
  }
}