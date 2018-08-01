import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

import './LoginPage.css';

class LoginPage extends React.Component {

  goToHome = () => {
    this.props.history.push('/home');
  }
  render () {
    return (
      <div className="LoginPage">
        <h2>LoginPage</h2>
        <LoginForm
        goToHome={this.goToHome}
        />
      </div>
    );
  }
}

export default LoginPage;