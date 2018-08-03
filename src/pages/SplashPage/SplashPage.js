import React from 'react';
import { Link } from 'react-router-dom';

import './SplashPage.css';

class SplashPage extends React.Component {
  render () {
    return (
      <div className="SplashPage">
        <h2>Splash Page</h2>
        <h4><strong>Our Mission: </strong>To expose hidden landscape gems in the United States for all photographers to find</h4>
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