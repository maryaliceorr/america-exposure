import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

import './LoginPage.css';

class LoginPage extends React.Component {
  render () {
    return (
      <div className="LoginPage">
        <h2>LoginPage</h2>
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;