import React from 'react';
import tripRequest from '../../firebaseCalls/trip';
import spotRequests from '../../firebaseCalls/spots';
// import TripCard from '../../components/TripCard/TripCard';
import tripSpotRequests from '../../firebaseCalls/tripSpot';

import './TripPage.css';

class TripPage extends React.Component {

  state = {
    trip: {},
    tripSpots: [],
    spots: [],
  }

  componentDidMount () {
    const tripId = this.props.match.params.tripId;
    // const tripSpotIds =
    tripRequest
      .getSingleTrip(tripId)
      .then((trip) => {
        this.setState({trip});
      })
      .catch((error) => {
        console.error('error with get request for Trips', error);
      });
    spotRequests
      .getSpots()
      .then((spots) => {
        this.setState({spots});
      })
      .catch((error) => {
        console.error('error with getSpots', error);
      });
    tripSpotRequests
      .getTripSpots(tripId)
      .then((tripSpots) => {
      this.setState({tripSpots})
      })
      .catch((error) => {
        console.error('error with get TripSpots', error);
      });
  }

  render () {
    const {trip, tripSpots, spots} = this.state;
    const getSpots = tripSpots.map((tripSpot) => {
      const spot = spots.find(x => x.id === tripSpot.spotId)
       if (spot)  {return (
          <h4>{spot.locationName}</h4>
        )}
        return '';
    })
    return (
      <div className="TripPage">
        <h4>{trip.tripName}</h4>
        {getSpots}
      </div>
    );
  }
}

export default TripPage;
