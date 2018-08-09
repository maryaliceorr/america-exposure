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

deleteATrip = () => {
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


  render () {
    const tripCards = this.state.trips.map((trip) => {
      return (
        <TripCard
          key = {trip.id}
          trip = {trip}
          deleteATrip = {this.deleteATrip}
        />
      );
    });
    return (
      <div className="UpcomingTripsPage">
        <h1 className="text-center">UPCOMING TRIPS</h1>
            <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">{tripCards}</div>
        <div className="extra-space"></div>
      </div>
    );
  }
}

export default UpcomingTripsPage;