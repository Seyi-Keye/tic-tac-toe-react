export class Authentication{
  constructor(){}

  static validityChecker(email, password){
    const validPassword = Authentication.passwordChecker(password);
    const validEmail = Authentication.emailChecker(email);
    if(validEmail && validPassword) {
      localforage.setItem('authenication', 'Successful');
    }
    return 'Successful';
  }

  static passwordChecker(password){
    const trimedPassword = password.trim();
    if(!trimedPassword.length) return 'Password cannot be empty';
    else if(trimedPassword.length === 1 || password.length ===2) return 'Invalid password, length of 3 at least';
    return trimedPassword;
  }

  static emailChecker(email){
    if (!email.length) return 'Email cannot be empty';
    return email===/\b[a-zA-Z0-9_]+@[a-z]+\.com\b/ ?  email : 'Invalid email address';
  }
}