import React from 'react';
import { Link } from 'react-router-dom';
import fbAuthRequests from '../../firebaseCalls/auth';
import './RegisterPage.css';

class RegisterPage extends React.Component {
  state = {
    visitor: {
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
        this.props.history.push('/home');
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
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="Email"
          value={visitor.email}
          onChange={this.emailChanged}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
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
          <Link to="/login">Already Registered? Login Here.</Link>
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


export default RegisterPage;
