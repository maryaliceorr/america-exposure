import React from 'react';
import {DropdownButton, MenuItem } from 'react-bootstrap';
import spotRequests from '../../firebaseCalls/spots';
import tripRequests from '../../firebaseCalls/trip';
import authRequests from '../../firebaseCalls/auth';
import tripSpotRequests from '../../firebaseCalls/tripSpot';
import bucketListRequests from '../../firebaseCalls/bucketList';

import './SpotPage.css';


class SpotPage extends React.Component {
  state = {
    spot: {},
    trips: [],
  }

  componentDidMount () {
    const spotId = this.props.match.params.id;
    const uid = authRequests.getUID();
    spotRequests
      .getSingleSpot(spotId)
      .then((spot) => {
        this.setState({spot});
        tripRequests
        .getTrips(uid)
        .then((trips) => {
        this.setState({trips})
        })
        .catch((error) => {
          console.error('error with get Trips', error);
        });
      })
      .catch((error) => {
        console.error('error with get request for Spots', error);
      });
  }

  postTripSpot = (e) => {
    const tripSpot = {
      tripId: (e),
      spotId: (this.props.match.params.id)
    }
    tripSpotRequests
      .postTripSpots(tripSpot)
      .then(() => {
      })
      .catch((error) => {
        console.error('error with postTripSpot request', error);
      });
  }

  postBucketSpot = () => {
    const bucketSpot = {
      uid: authRequests.getUID(),
      bucketSpotId: (this.props.match.params.id)
    }
    console.log(this.props.match.params.id);
    bucketListRequests
      .postBucketSpots(bucketSpot)
      .then(() => {
      })
      .catch((error) => {
        console.error('error with postTripSpot request', error);
      });
  }

  render () {
    const {spot} = this.state;
    const imageUrl = spot.image ? require(`../../images/spots/${spot.image}`) : null;
    const dropdownTrips = this.state.trips.map((trip) => {
      return (
      <MenuItem
        onSelect = {this.postTripSpot}
        eventKey={trip.id}>
        {trip.tripName}
      </MenuItem>
      )
    })

    return (
      <div className="SpotsCard">
      <div>
        <h1>{spot.locationName}</h1>
        <div className="AllSpotsInfo">
          <img src={imageUrl} alt={spot.locationName} />
          <h4>{spot.parkName}</h4>
          <h5>Location: {spot.city}, {spot.stateAbbr}</h5>
          <h5>Region: {spot.regionId}</h5>
          <h5>Landscape Category: {spot.landscapeId}</h5>
          <h5>Best Time of Day to Shoot: {spot.timeId}</h5>
          <h5>Best Season to Shoot: {spot.seasonDescrip}</h5>
          <h5>Permit: {spot.permit}</h5>
          <h3>Coordinates:</h3>
          <h5>Latitude: {spot.latitude}</h5>
          <h5>Longitude: {spot.longitude}</h5>
          <p>{spot.description}</p>
            <DropdownButton
              bsStyle={"default"}
              title="Select A Trip"
              id="dropdown1"
            >
            <MenuItem
              onSelect = {this.postBucketSpot}
              >
              Bucket List
            </MenuItem>
              {dropdownTrips}
            </DropdownButton>
          <button className="btn btn-info" type="submit">Go to Trips</button>
      </div>
    </div>
  </div>
    );
  }
}

export default SpotPage;
