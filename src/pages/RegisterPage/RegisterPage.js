import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './RegisterPage.css';

class RegisterPage extends React.Component {
  render () {
    return (
      <div className="RegisterPage">
        <h2>RegisterPage</h2>
        <RegisterForm />
      </div>
    );
  }
}

export default RegisterPage;