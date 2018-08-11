import React from 'react';
import {Panel} from 'react-bootstrap';
import './BucketSpot.css';

class BucketSpot extends React.Component {
  deleteSpotEvent = () => {
    this.props.deleteSpot(this.props.bucketSpotId);
  }
  render () {
    const bucketSpot = this.props.spot;
    const imageUrl = bucketSpot.image ? require (`../../images/spots/${bucketSpot.image}`) : null;
    return (
      <div className="BucketSpot col-md-4">
        <div>
          <Panel>
            <Panel.Heading>
              <Panel.Title className="text-center bucket-title">
              {bucketSpot.locationName}</Panel.Title>
              <h4 className="text-center">{bucketSpot.parkName}</h4>
            </Panel.Heading>
            <Panel.Body>
              <img className="bucket-pic" src={imageUrl} alt={bucketSpot.locationName}/>
              <h4 className="text-center"><strong>Details: </strong></h4>
              <h5><strong>Location: </strong>{bucketSpot.city}, {bucketSpot.stateAbbr}</h5>
              <h5><strong>Region: </strong>{bucketSpot.regionId}</h5>
              <h5><strong>Landscape Category: </strong>{bucketSpot.landscapeId}</h5>
              <h5><strong>Best Time of Day to Shoot: </strong>{bucketSpot.timeId}</h5>
              <h5><strong>Best Season to Shoot: </strong>{bucketSpot.seasonDescrip}</h5>
              {bucketSpot.permit === true ? <h5><strong>Permit: </strong>Required</h5> : <h5><strong>Permit: </strong>Not Required</h5> }
              <h4 className="text-center"><strong>Coordinates:</strong></h4>
              <h5><strong>Latitude: {bucketSpot.latitude}</strong></h5>
              <h5><strong>Longitude: {bucketSpot.longitude}</strong></h5>
              <p>{bucketSpot.description}</p>
              <div className="text-center button-container">
        <button className="btn btn-danger"
        onClick={this.deleteSpotEvent}
        >DELETE</button>
        </div>
        </Panel.Body>
        </Panel>
      </div>
      </div>
    );
  }
}

export default BucketSpot;
