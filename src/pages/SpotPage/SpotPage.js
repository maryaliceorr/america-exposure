import React from 'react';
import { Link } from 'react-router-dom';
import spotsRequests from '../../firebaseCalls/spots';

import './SpotPage.css';

class SpotPage extends React.Component {

state = {
  spot: [],
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
    console.log(this.state.spots);
    const spotCard = this.state.spots.map((spot) => {
      // const imageUrl = require(`${spot.image}`);
      return (
        <div key={spot.id}>
          <h1>{spot.locationName}</h1>
          <Link to={`/spot/${spot.id}`}>
          {/* <img src={imageUrl} alt={spot.locationName} /> */}
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

    return (
      <div className="SpotPage">
        {spotCard}
      </div>
    );
  }
}

export default SpotPage;