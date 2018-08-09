import React from 'react';
import { Link } from 'react-router-dom';
import {Panel} from 'react-bootstrap';
import tripRequests from '../../firebaseCalls/trip';

import './TripCard.css';

class TripCard extends React.Component {

  deleteTrip = () => {
    tripRequests
      .deleteTrip(this.props.trip.id)
      .then(() => {
        this.props.deleteATrip();
        })
      .catch((error) => {
        console.error('error with deleteTrip', error);
      })
  }

  render () {
    const {trip} = this.props;
    console.log(this.props);
    return (
      <div className="TripCard">
        <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title className=" text-center trip-title">{trip.tripName}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <h4><strong>Date: </strong>{trip.date}</h4>
            <h4><strong>Notes: </strong>{trip.notes}</h4>
          <div className="button-container text-center">
            <Link to={`/trip/${trip.id}`}>
              <button
              type="button"
              className="view-button btn btn-default"
              >
              View Trip
              </button>
            </Link>
            <Link to={`/edit/trip/${trip.id}`}>
            <button
            className="btn btn-default edit-button"
            >
            Edit Trip
            </button>
            </Link>
            <button
            className="text-center btn btn-danger"
            onClick={this.deleteTrip}
            >
            Delete Trip
            </button>
          </div>
          </Panel.Body>
        </Panel>
        </div>
      </div>
    );
  }
}

export default TripCard;
