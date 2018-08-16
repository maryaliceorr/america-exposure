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
            </Panel.Heading>
            <Panel.Body>
              <img className="bucket-pic" src={imageUrl} alt={bucketSpot.locationName}/>
              <h4 className="text-center"><strong className="heading">Details: </strong></h4>
              {bucketSpot.parkStatus === "true" ? <h5><strong>Park Name: </strong>{bucketSpot.parkName}</h5> : <h5><strong>Park Name: </strong>N/A</h5>}
              <h5><strong>Location: </strong>{bucketSpot.city}, {bucketSpot.stateAbb}</h5>
              <h5><strong>Region: </strong>{bucketSpot.region}</h5>
              <h5><strong>Landscape Category: </strong>{bucketSpot.landscapeType}</h5>
              <h5><strong>Best Time of Day to Shoot: </strong>{bucketSpot.time}</h5>
              <h5><strong>Best Season to Shoot: </strong>{bucketSpot.season}</h5>
              {bucketSpot.permit === true ? <h5><strong>Permit: </strong>Required</h5> : <h5><strong>Permit: </strong>Not Required</h5> }
              <h4 className="text-center"><strong className="heading">Coordinates:</strong></h4>
              <h5><strong>Latitude: {bucketSpot.latitude}</strong></h5>
              <h5><strong>Longitude: {bucketSpot.longitude}</strong></h5>
              <p><strong className="heading">Description:</strong> {bucketSpot.description}</p>
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
