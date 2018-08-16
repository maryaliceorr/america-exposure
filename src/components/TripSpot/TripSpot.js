import React from 'react';
import {Panel, Glyphicon} from 'react-bootstrap';

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
            </Panel.Heading>
            <Panel.Body>
              <img className="text-center trip-pic" src={imageUrl} alt={tripSpot.locationName}/>
              <h4 className="text-center heading"><strong>Details:</strong></h4>
              {tripSpot.parkStatus === "true" ? <h5><strong>Park Name: </strong>{tripSpot.parkName}</h5> : <h5><strong>Park Name: </strong>N/A</h5>}
              <h5><strong>Location: </strong>{tripSpot.city}, {tripSpot.stateAbb}</h5>
              <h5><strong>Region: </strong>{tripSpot.region}</h5>
              <h5><strong>Landscape Category: </strong>{tripSpot.landscape}</h5>
              <h5><strong>Best Time of Day to Shoot: </strong>{tripSpot.time}</h5>
              <h5><strong>Best Season to Shoot: </strong>{tripSpot.season}</h5>
              {tripSpot.permit === true ? <h5><strong>Permit: </strong>Required</h5> : <h5><strong>Permit: </strong>Not Required</h5> }
              <h4 className="text-center heading"><strong>Coordinates:</strong></h4>
              <h5><strong>Latitude: </strong>{tripSpot.latitude}</h5>
              <h5><strong>Longitude: </strong>{tripSpot.longitude}</h5>
              <p><strong className="heading">Description:</strong> {tripSpot.description}</p>
            <div className="text-center button-container">
            <button className="btn btn-danger"
            onClick={this.deleteSpotEvent}
            ><Glyphicon glyph="trash" /></button>
            </div>
          </Panel.Body>
        </Panel>
      </div>
      </div>
    );
  }
}

export default TripSpot;
