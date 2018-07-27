import React from 'react';
import { Link } from 'react-router-dom';
import spotsRequests from '../../firebaseCalls/spots';

import './SpotsPage.css';

class SpotsPage extends React.Component {

state = {
  spots: [],
}

  componentDidMount () {
    const locationId = this.props.match.params.subCategoryId;
    spotsRequests
    .getSpots(locationId)
    .then((spots) => {
      this.setState({spots})
    })
    .catch((error) => {
      console.error('error with get spots request', error);
    });
  };

  render () {
    const spotsCards = this.state.spots.map((spot) => {
      const imageUrl = require(`${spot.image}`);
      return (
        <div key={spot.id}>
          <Link to={`/spot/${spot.id}`}>
          <img src={imageUrl} alt={spot.locationName} />
            <button
            type="button"
            className="btn btn-default"
            >
              {spot.locationName}
            </button>
          </Link>
          </div>
      );
    });
    const actualSubCategoryName = (this.props.match.params.subCategoryId);

    let subCategoryName = "";
    if (actualSubCategoryName === "subCategory01") {
      subCategoryName = (
        <h1>Rivers</h1>
      )
    } if (actualSubCategoryName === "subCategory02") {
      subCategoryName = (
        <h1>Oceans</h1>
      )
    }  if (actualSubCategoryName === "subCategory03") {
      subCategoryName = (
        <h1>Waterfalls</h1>
      )
    } if (actualSubCategoryName === "subCategory04") {
      subCategoryName = (
        <h1>Canyons</h1>
      )
    } if (actualSubCategoryName === "subCategory05") {
      subCategoryName = (
        <h1>Forests</h1>
      )
    } if (actualSubCategoryName === "subCategory06") {
      subCategoryName = (
        <h1>Lakes</h1>
      )
    } if (actualSubCategoryName === "subCategory07") {
      subCategoryName = (
        <h1>Mountains</h1>
      )
    } if (actualSubCategoryName === "subCategory08") {
      subCategoryName = (
        <h1>Rock Formations</h1>
      )
    } if (actualSubCategoryName === "subCategory09") {
      subCategoryName = (
        <h1>Dunes/Beaches</h1>
      )
    } if (actualSubCategoryName === "subCategory10") {
      subCategoryName = (
        <h1>Non-Nature</h1>
      )
    } if (actualSubCategoryName === "subCategory11") {
      subCategoryName = (
        <h1>Pools/Springs</h1>
      )
    } if (actualSubCategoryName === "subCategory12") {
      subCategoryName = (
        <h1>Scenic Byways</h1>
      )
    } if (actualSubCategoryName === "subCategory13") {
      subCategoryName = (
        <h1>West</h1>
      )
    } if (actualSubCategoryName === "subCategory14") {
      subCategoryName = (
        <h1>Midwest</h1>
      )
    } if (actualSubCategoryName === "subCategory15") {
      subCategoryName = (
        <h1>Northeast</h1>
      )
    } if (actualSubCategoryName === "subCategory16") {
      subCategoryName = (
        <h1>Southeast</h1>
      )
    } if (actualSubCategoryName === "subCategory17") {
      subCategoryName = (
        <h1>Southwest</h1>
      )
    } if (actualSubCategoryName === "subCategory18") {
      subCategoryName = (
        <h1>Sunrise</h1>
      )
    } if (actualSubCategoryName === "subCategory19") {
      subCategoryName = (
        <h1>Morning</h1>
      )
    } if (actualSubCategoryName === "subCategory20") {
      subCategoryName = (
        <h1>Afternoon</h1>
      )
    } if (actualSubCategoryName === "subCategory21") {
      subCategoryName = (
        <h1>Sunset</h1>
      )
    } if (actualSubCategoryName === "subCategory22") {
      subCategoryName = (
        <h1>Night</h1>
      )
    } if (actualSubCategoryName === "subCategory23") {
      subCategoryName = (
        <h1>All Day</h1>
      )
    } if (actualSubCategoryName === "subCategory24") {
      subCategoryName = (
        <h1>Spring</h1>
      )
    } if (actualSubCategoryName === "subCategory25") {
      subCategoryName = (
        <h1>Summer</h1>
      )
    } if (actualSubCategoryName === "subCategory26") {
      subCategoryName = (
        <h1>Fall</h1>
      )
    } if (actualSubCategoryName === "subCategory27") {
      subCategoryName = (
        <h1>Winter</h1>
      )
    } if (actualSubCategoryName === "subCategory28") {
      subCategoryName = (
        <h1>All Seasons</h1>
      )
    }

    return (
      <div className="SpotsPage">
        {subCategoryName}
        {spotsCards}
      </div>
    );
  }
}

export default SpotsPage;