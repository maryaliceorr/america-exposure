import React from 'react';

import './TripSpot.css';

class TripSpot extends React.Component {
  deleteSpotEvent = () => {
    this.props.deleteSpot(this.props.tripSpotId);
  }
  render () {
    const tripSpot = this.props.spot;
    const imageUrl = tripSpot.image ? require(`../../images/spots/${tripSpot.image}`) : null;
    return (
      <div className="TripSpot">
        <h2>{tripSpot.locationName}</h2>
        <img src={imageUrl} alt={tripSpot.locationName}/>
        <h4>{tripSpot.parkName}</h4>
          <h5>Location: {tripSpot.city}, {tripSpot.stateAbbr}</h5>
          <h5>Region: {tripSpot.regionId}</h5>
          <h5>Landscape Category: {tripSpot.landscapeId}</h5>
          <h5>Best Time of Day to Shoot: {tripSpot.timeId}</h5>
          <h5>Best Season to Shoot: {tripSpot.seasonDescrip}</h5>
          <h5>Permit: {tripSpot.permit}</h5>
          <h3>Coordinates:</h3>
          <h5>Latitude: {tripSpot.latitude}</h5>
          <h5>Longitude: {tripSpot.longitude}</h5>
          <p>{tripSpot.description}</p>

        <button className="btn btn-danger"
        onClick={this.deleteSpotEvent}
        >DELETE</button>
      </div>
    );
  }
}

export default TripSpot;
