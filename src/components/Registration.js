import React, { Component } from 'react';
import localforage from 'localforage';
import { Validation } from '../api/Validation'

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // console.log('state', this.state)
  }

  handleSubmit(event) {
    event.preventDefault();
    Validation.clearErrors();
    var x = Validation.validationChecker(this.state.email, this.state.password, this.state.firstName, this.state.lastName)
    console.log(x, 'xxx')
  }

  render(){
    return (
      <div className="container">
        <h1>Register Here </h1>
        <form className="form-group col-md-5 col-md-offset-3" onSubmit={this.handleSubmit}>
          <label >Email:</label>
          <input className="form-control input-group" name="email"
          placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
          <label>Password:</label>
          <input className="form-control input-group" type="password" name="password" placeholder="Password" value={this.state.password}
            onChange={this.handleChange}/>
          <label>Firstname:</label>
          <input className="form-control input-group" name="firstName" placeholder="Firstname" value={this.state.firstName}
            onChange={this.handleChange}/>
          <label>Lastname:</label>
          <input className="form-control input-group" name="lastName" placeholder="Lastname" value={this.state.lastName}
            onChange={this.handleChange}/><br/>
          <button type="submit" className="btn btn-danger">Submit</button>
        </form>
      </div>
      )
  }
}