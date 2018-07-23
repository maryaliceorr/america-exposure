import React from 'react';
import { Link } from 'react-router-dom';

import './UpcomingTripsPage.css';

class UpcomingTripsPage extends React.Component {
  render () {
    return (
      <div className="UpcomingTripsPage">
        <h2>UpcomingTripsPage</h2>
        <Link to="/trip/:tripId">
          <button
          type="button"
          className="btn btn-default"
          >
            To individual trip
          </button>
        </Link>
      </div>
    );
  }
}

export default UpcomingTripsPage;