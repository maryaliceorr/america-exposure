import React from 'react';

import './BucketSpot.css';

class BucketSpot extends React.Component {
  deleteSpotEvent = () => {
    this.props.deleteSpot(this.props.bucketSpotId);
  }
  render () {
    const bucketSpot = this.props.spot;
    const imageUrl = bucketSpot.image ? require(`../../images/spots/${bucketSpot.image}`) : null;
    return (
      <div className="BucketSpot">
        <h2>{bucketSpot.locationName}</h2>
        <img src={imageUrl} alt={bucketSpot.locationName}/>
        <h4>{bucketSpot.parkName}</h4>
          <h5>Location: {bucketSpot.city}, {bucketSpot.stateAbbr}</h5>
          <h5>Region: {bucketSpot.regionId}</h5>
          <h5>Landscape Category: {bucketSpot.landscapeId}</h5>
          <h5>Best Time of Day to Shoot: {bucketSpot.timeId}</h5>
          <h5>Best Season to Shoot: {bucketSpot.seasonDescrip}</h5>
          <h5>Permit: {bucketSpot.permit}</h5>
          <h3>Coordinates:</h3>
          <h5>Latitude: {bucketSpot.latitude}</h5>
          <h5>Longitude: {bucketSpot.longitude}</h5>
          <p>{bucketSpot.description}</p>

        <button className="btn btn-danger"
        onClick={this.deleteSpotEvent}
        >DELETE</button>
      </div>
    );
  }
}

export default BucketSpot;
