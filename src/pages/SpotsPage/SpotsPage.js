import React from 'react';
import { Link } from 'react-router-dom';
import spotsRequests from '../../firebaseCalls/spots';

import './SpotsPage.css';

class SpotsPage extends React.Component {

state = {
  spots: [],
}

  componentDidMount () {
    const subCategoryId = this.props.match.params.subCategoryId;
    spotsRequests
    .getSpots(subCategoryId)
    .then((spots) => {
      this.setState({spots})
    })
    .catch((error) => {
      console.error('error with get spots request', error);
    });
  };

  render () {
    const spotsCards = this.state.spots.map((spot) => {
      return (
        <div key={spot.id}>
          <Link to={`/spot/${spot.id}`}>
            <button
            type="button"
            className="btn btn-default"
            >
              {spot.name}
            </button>
          </Link>
          </div>
      );
    });
    return (
      <div className="SpotsPage">
        <h2>Spots Cards</h2>
        {spotsCards}
      </div>
    );
  }
}

export default SpotsPage;