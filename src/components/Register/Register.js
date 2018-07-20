import React from 'react';
import { Link } from 'react-router-dom';

import fbAuthRequests from '../../firebaseCalls/auth';

import './Register.css';

class Register extends React.Component {

  state = {
    user: {
      email:'',
      password: '',
    },
  };

  registerForAppEvent = (e) => {
    const {visitor} = this.state;
    e.preventDefault();
    fbAuthRequests
      .registerVisitor(visitor)
      .then(() => {
        this.props.history.push('/');
      })
      .catch((error) => {
        console.error('error with registerForAppEvent', error);
      });
  };

emailChanged = e => {
  const tempVisitor = {...this.state.visitor};
  tempVisitor.email = e.target.value;
  this.setState({visitor: tempVisitor});
};

passwordChanged = e => {
  const tempVisitor = {...this.state.visitor};
  tempVisitor.password = e.target.value;
  this.setState({visitor: tempVisitor});
};

  render () {
    const {visitor} = this.state;
    return (
      <div className="Register">
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
          type="email"
          class="form-control"
          id="inputEmail"
          placeholder="Email"
          value={visitor.email}
          onChange={this.emailChanged}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
          type="password"
          className="form-control"
          id="=inputPassword"
          placeholder="Password"
          value={visitor.password}
          onChange={this.passwordChanged}
          />
        </div>
        <div>
          <Link to="/login">Already registered? Login Here.</Link>
        </div>
        <button
        type="submit"
        className="btn btn-default"
        onClick={this.registerForAppEvent}
        >
        Submit
        </button>
      </form>
    </div>
  );
}
}


export default Register;
