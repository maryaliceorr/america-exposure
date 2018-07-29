import React from 'react';
import spotRequests from '../../firebaseCalls/spots';

import './SpotPage.css';


class SpotPage extends React.Component {
  state = {
    spot: {},
  }

  componentDidMount () {
    const spotId = this.props.match.params.id;
    spotRequests
      .getSingleSpot(spotId)
      .then((spot) => {
        this.setState({spot});
      })
      .catch((error) => {
        console.error('error with get request for Spots', error);
      });
  }

  render () {
    const {spot} = this.state;
    const imageUrl = spot.image ? require(`../../images/spots/${spot.image}`) : null;
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
          <div clasNames="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Choose a Trip
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Trip1</a></li>
              <li><a href="#">Trip2</a></li>
              <li><a href="#">Trip3</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
          <button className="btn btn-info" type="submit">Add to Trip</button>
      </div>
    </div>
      </div>
    );
  }
}

export default SpotPage;
