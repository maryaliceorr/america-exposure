import React from 'react';
import spotRequests from '../../firebaseCalls/spots';
// import AllSpotsInfo from '../../components/AllSpotsInfo/AllSpotsInfo';

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
    return (
      <div className="SpotsCard">
        <h2>Spot</h2>
        <h4>{spot.locationName}</h4>
      </div>
    );
  }
}

export default SpotPage;
