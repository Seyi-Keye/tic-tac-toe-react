import localforage from 'localforage';
let errorArray = [];

export class Validation {

  static validationChecker(email, password, firstName, lastName){
    const validEmail = Validation.emailChecker(email);
    const validPassword = Validation.lengthChecker(password, 'password');
    const validFirstName = Validation.lengthChecker(firstName, 'firstname');
    const validLastName = Validation.lengthChecker(lastName, 'lastname');
    if((validEmail === email) && (validPassword ===password) && (validFirstName === firstName) && (validLastName === lastName)) {
      return { status: 'Successful', email: validEmail, password: validPassword, firstName: validFirstName, lastName: validLastName, score: 0 };
    }
    return Validation.errors();
  }

  static lengthChecker(field = '', fieldName = ''){
    const trimedfield = field.trim();
    if(!trimedfield.length) return errorArray.concat(`${fieldName} cannot be empty`);
    if(trimedfield.length < 3) return errorArray.concat(`Invalid ${fieldName}, length of 3 at least`);
    return trimedfield;
  }

  static emailChecker(email){
    if (!email.length) return errorArray.concat('email cannot be empty');
    return /\b[a-zA-Z0-9_]+@[a-z]+\.com\b/.test(email) ? email : errorArray = errorArray.concat('Invalid email address');
  }

  static errors() {
   return errorArray.reduce((acc, error) => {
       acc = acc + error + '\n';
       return acc;
    }, '');
  }
}
