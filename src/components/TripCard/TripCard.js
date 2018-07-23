import React from 'react';
import { Link } from 'react-router-dom';

import './TripCard.css';

class TripCard extends React.Component {
  render () {
    return (
      <div className="TripCard">
        <h2>TripCard</h2>
        <Link to="/edit/trip/:tripId">
          <button
          type="button"
          className="btn btn-default"
          >
          Edit an individual trip
          </button>
        </Link>

      </div>
    );
  }
}

export default TripCard;
