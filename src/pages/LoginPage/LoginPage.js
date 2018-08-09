import React from 'react';
// import LoginForm from '../../components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';
import fbAuthRequests from '../../firebaseCalls/auth';

import './LoginPage.css';

class LoginPage extends React.Component {

    state = {
      visitor: {
        email: '',
        password: '',
      },
    };

    loginToSiteEvent = (e) => {
      const {visitor} = this.state;
      e.preventDefault();
      fbAuthRequests
        .loginVisitor(visitor)
        .then(() => {
          this.props.history.push('/home');
        })
        .catch((error) => {
          console.error('error with loginToAppEvent', error);
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
      <div className="LoginPage">
      <h1 className="text-center">LOGIN HERE</h1>
        <form className="col-md-6 col-md-offset-3">
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
            id="inputPassword"
            placeholder="Password"
            value={visitor.password}
            onChange={this.passwordChanged}
            />
          </div>
          <div className="linking text-center">
            <Link to="/register" className="linkcolor">NOT REGISTERED? SIGN UP HERE.</Link>
          </div>
          <div className="text-center">
            <button
            type="submit"
            className="btn btn-default"
            onClick={this.loginToSiteEvent}
            >
            Submit
            </button>
          </div>
        </form>
        <div className="extra-space"></div>
      </div>
    );
  }
}

export default LoginPage;