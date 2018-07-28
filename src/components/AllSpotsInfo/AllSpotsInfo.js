import React from 'react';

import './AllSpotsInfo.css';

class AllSpotsInfo extends React.Component {
  render () {
    const {AllSpotsInfo} = this.props;
    return (
      <div>
        <h2>AllSpotsInfo</h2>
        <div className="AllSpotsInfo">
          <img src={AllSpotsInfo.image} alt={AllSpotsInfo.locationName} />
          <h2>{AllSpotsInfo.locationName}</h2>
          <h4>{AllSpotsInfo.parkName}</h4>
          <h5>Location: {AllSpotsInfo.city}, {AllSpotsInfo.stateAbbr}</h5>
          <h5>Region: {AllSpotsInfo.regionId}</h5>
          <h5>Landscape Category: {AllSpotsInfo.landscapeId}</h5>
          <h5>Best Time of Day to Shoot: {AllSpotsInfo.timeId}</h5>
          <h5>Best Season to Shoot: {AllSpotsInfo.seasonDescrip}</h5>
          <h5>Permit: {AllSpotsInfo.permit}</h5>
          <h3>Coordinates:</h3>
          <h5>Latitude: {AllSpotsInfo.latitude}</h5>
          <h5>Longitude: {AllSpotsInfo.longitude}</h5>
          <p>{AllSpotsInfo.description}</p>
          <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Choose a Trip
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Trip1</a></li>
              <li><a href="#">Trip2</a></li>
              <li><a href="#">Trip3</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
      </div>
    </div>
    );
  }
}

export default AllSpotsInfo;