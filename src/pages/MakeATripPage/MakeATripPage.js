import React from 'react';
import { Link } from 'react-router-dom';

import './MakeATripPage.css';


class MakeATripPage extends React.Component {
  render () {
    return (
      <div className="MakeATripPage">
        <h2>MakeATripPage</h2>
        <Link to="/new/trip">
          <button
          type="button"
          className="btn btn-default"
          >
            Create a Trip
          </button>
        </Link>
      </div>
    );
  }
}

export default MakeATripPage;