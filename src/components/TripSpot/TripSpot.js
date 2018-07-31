import React from 'react';

import './TripSpot.css';

class TripSpot extends React.Component {
  deleteSpotEvent = () => {
    this.props.deleteSpot(this.props.tripSpotId);
  }
  render () {
    return (
      <div className="TripSpot">
        <h2>{this.props.spot.locationName}</h2>
        <button className="btn btn-danger"
        onClick={this.deleteSpotEvent}
        >DELETE</button>
      </div>
    );
  }
}

export default TripSpot;
