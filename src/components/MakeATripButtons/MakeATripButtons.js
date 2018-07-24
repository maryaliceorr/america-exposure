import React from 'react';
import { Link } from 'react-router-dom';

import './MakeATripButtons.css';

class MakeATripButtons extends React.Component {
  render () {
    return (
      <div className="MakeATripButtons">
        <Link to="/upcoming-trips">
          <button
          type="button"
          className="btn btn-default"
          >
            To Upcoming Trips
          </button>
        </Link>
        <Link to="/spot/:id">
          <button
          type="button"
          className="btn btn-default"
          >
            Find More Spots
          </button>
        </Link>
      </div>
    );
  }
}

export default MakeATripButtons;
