import React from 'react';
import { Link } from 'react-router-dom';

import './SplashPage.css';

class SplashPage extends React.Component {
  render () {
    return (
      <div className="SplashPage">
        <h2>Splash Page</h2>
        <Link to="/register">
          <button
          type="button"
          className="btn btn-default"
          >
           ENTER
          </button>
        </Link>
      </div>
    );
  }
}

export default SplashPage;