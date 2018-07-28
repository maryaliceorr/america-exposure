import React from 'react';
import { Link } from 'react-router-dom';
import tripRequests from '../../firebaseCalls/trip';

import './TripCard.css';

class TripCard extends React.Component {

state =  {
  trips: [],
}

componentDidMount () {
  const tripId = this.props.match.params.tripId;
  tripRequests
    .getTrips(tripId)
    .then((trips) => {
      this.setState({trips})
    })
    .catch((error) => {
      console.error('error with get Trips', error);
    });
};

  render () {
    const tripCards = this.state.trips.map((trip) => {
      <div>
        <h4>trip.tripName</h4>
        <h4>trip.date</h4>
        <p>trip.notes</p>
      </div>
    });
    return (
      <div className="TripCard">
        <h2>TripCard</h2>
        {tripCards}

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
