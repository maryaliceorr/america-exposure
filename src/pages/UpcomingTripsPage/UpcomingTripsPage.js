import React from 'react';
import TripCard from '../../components/TripCard/TripCard';
import tripRequests from '../../firebaseCalls/trip';
import authRequests from '../../firebaseCalls/auth';


import './UpcomingTripsPage.css';

class UpcomingTripsPage extends React.Component {

  state = {
    trips: [],
  }

  componentDidMount () {
    const uid = authRequests.getUID();
    tripRequests
      .getTrips(uid)
      .then((trips) => {
        this.setState({trips})
      })
      .catch((error) => {
        console.error('error with get Trips', error);
      });
  };

  editTrip = (tripId) => {
    // const tripId = this.props.match.params.tripId;
    tripRequests
      .putTrip(tripId)
      .then(() => {
        console.log(this.state.tripId);
      })
      .catch((error) => {
        console.error('error with deleteSpot', error);
      })
  }

  deleteTrip = (tripId) => {
    // const tripId = this.props.match.params.tripId;
    tripRequests
      .deleteTrip(tripId)
      .then(() => {

        })
      .catch((error) => {
        console.error('error with deleteTrip', error);
      })
  }

  render () {
    const tripCards = this.state.trips.map((trip) => {
      return (
        <TripCard
          key = {trip.id}
          trip = {trip}
        />
      );
    });
    return (
      <div className="UpcomingTripsPage">
        <h2>UpcomingTripsPage</h2>
        {tripCards}
      </div>
    );
  }
}

export default UpcomingTripsPage;