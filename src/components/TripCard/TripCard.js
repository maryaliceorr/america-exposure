import React from 'react';
import { Link } from 'react-router-dom';

import './TripCard.css';

class TripCard extends React.Component {
  render () {
    const {trip} = this.props;
    return (
      <div className="TripCard">
        <div>
          <h4>{trip.tripName}</h4>
          <h4><strong>Date: </strong>{trip.date}</h4>
          <p><strong>Notes: </strong>{trip.notes}</p>
          <Link to={`/trip/${trip.id}`}>
            <button
            type="button"
            className="btn btn-default"
            >
            To Trip
            </button>
        </Link>
        </div>
      </div>
    );
  }
}

export default TripCard;
