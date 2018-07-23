import React from 'react';
import { Link } from 'react-router-dom';

import './CameraNav.css';

class CameraNav extends React.Component {
  render () {
    return (
      <div className="CameraNav">
        <h2>CameraNav</h2>
        <Link to="/spots/:filterType">
          <button
          type="button"
          className="btn btn-default"
          >
            Landscape Types
          </button>
        </Link>
        <Link to="/spots/:filterType">
          <button
          type="button"
          className="btn btn-default"
          >
            Seasons
          </button>
        </Link>
        <Link to="/spots/:filterType">
          <button
          type="button"
          className="btn btn-default"
          >
            Regions
          </button>
        </Link>
        <Link to="/spots/:filterType">
          <button
          type="button"
          className="btn btn-default"
          >
            Times of Day
          </button>
        </Link>
      </div>
    );
  }
}

export default CameraNav;
