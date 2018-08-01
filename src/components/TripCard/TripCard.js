import React from 'react';
import { Link } from 'react-router-dom';

import './TripCard.css';

class TripCard extends React.Component {

  // editTrip = (tripId) => {
  //   // const tripId = this.props.match.params.tripId;
  //   tripRequests
  //     .putTrip(tripId)
  //     .then(() => {
  //       console.log(this.state.tripId);
  //     })
  //     .catch((error) => {
  //       console.error('error with deleteSpot', error);
  //     })
  // }

  render () {
    const {trip} = this.props;
    console.log(this.props);
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
          <Link to={`/edit/trip/${trip.id}`}>
          <button
          className="btn btn-warning"
          >
          Edit Trip
          </button>
          </Link>
          <button
          className="btn btn-danger"
          onClick={this.deleteTrip}
          >
          Delete Trip
          </button>
        </div>
      </div>
    );
  }
}

export default TripCard;
