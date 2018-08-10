import React from 'react';
import {Panel} from 'react-bootstrap';

import './TripSpot.css';

class TripSpot extends React.Component {
  deleteSpotEvent = () => {
    this.props.deleteSpot(this.props.tripSpotId);
  }
  render () {
    const tripSpot = this.props.spot;
    const imageUrl = tripSpot.image ? require (`../../images/spots/${tripSpot.image}`) : null;
    return (
      <div className="col-md-4 TripSpot">
        <div>
          <Panel>
            <Panel.Heading>
              <Panel.Title className=" text-center trip-title">{tripSpot.locationName}</Panel.Title>
              <h4 className="text-center">{tripSpot.parkName}</h4>
            </Panel.Heading>
            <Panel.Body>
              <img className="text-center trip-pic" src={imageUrl} alt={tripSpot.locationName}/>
              <h4 className="text-center"><strong>Details:</strong></h4>
              <h5><strong>Location: </strong>{tripSpot.city}, {tripSpot.stateAbbr}</h5>
              <h5><strong>Region: </strong>{tripSpot.regionId}</h5>
              <h5><strong>Landscape Type: </strong>{tripSpot.landscapeId}</h5>
              <h5><strong>Best Time of Day to Shoot: </strong>{tripSpot.timeId}</h5>
              <h5><strong>Best Season to Shoot: </strong>{tripSpot.seasonDescrip}</h5>
              {tripSpot.permit === true ? <h5><strong>Permit: </strong>Required</h5> : <h5><strong>Permit: </strong>Not Required</h5> }
              <h4 className="text-center"><strong>Coordinates:</strong></h4>
              <h5><strong>Latitude: </strong>{tripSpot.latitude}</h5>
              <h5><strong>Longitude: </strong>{tripSpot.longitude}</h5>
              <p>{tripSpot.description}</p>
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

export default TripSpot;
