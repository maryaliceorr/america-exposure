import React from 'react';
import tripRequests from '../../firebaseCalls/trip';
import spotRequests from '../../firebaseCalls/spots';
import TripSpot from '../../components/TripSpot/TripSpot';
import tripSpotRequests from '../../firebaseCalls/tripSpot';


import './TripPage.css';

class TripPage extends React.Component {

  state = {
    trip: {},
    tripSpots: [],
    spots: [],
  }

  deleteSpot = (tripSpotId) => {
    const tripId = this.props.match.params.tripId;
    tripSpotRequests
      .deleteTripSpot(tripSpotId)
      .then(() => {
        tripSpotRequests
        .getTripSpots(tripId)
        .then((tripSpots) => {
        this.setState({tripSpots})
        })
        .catch((error) => {
          console.error('error with get TripSpots', error);
        });
      })
      .catch((error) => {
        console.error('error with deleteSpot', error);
      })
  }

  componentDidMount () {
    const tripId = this.props.match.params.tripId;
    // const tripSpotIds =
    tripRequests
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
          <TripSpot
            key={tripSpot.id}
            spot={spot}
            tripSpotId = {tripSpot.id}
            deleteSpot = {this.deleteSpot}
          />
        )}
        return '';
    })
    return (
      <div className="TripPage">
        <div className="text-center trip-info">
          <h1>{trip.tripName}</h1>
          <h3><strong>DATES: </strong>{trip.date}</h3>
          <h3><strong>NOTES: </strong>{trip.notes}</h3>
        </div>
        <div>
          {getSpots}
        </div>
        <div className="extra-space"></div>
      </div>
    );
  }
}

export default TripPage;
