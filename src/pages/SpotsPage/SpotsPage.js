import React from 'react';
import { Link } from 'react-router-dom';
import spotsRequests from '../../firebaseCalls/spots';

import subCategoryTitleSwitcher from '../../helpers/subCategoryTitleSwitcher';
import subCategorySwitcher from '../../helpers/subCategorySwitcher';

import './SpotsPage.css';

class SpotsPage extends React.Component {

state = {
  spots: [],
}

  componentDidMount () {
    const locationId = this.props.match.params.subCategoryId;
    const spotCategory = subCategorySwitcher(locationId);
    spotsRequests[spotCategory](locationId)
    .then((spots) => {
      this.setState({spots})
    })
    .catch((error) => {
      console.error('error with get spots request', error);
    });
  };

  render () {

    const spotsCards = this.state.spots.map((spot) => {
      const imageUrl = require(`../../images/spots/${spot.image}`);
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
    const subCategoryId = (this.props.match.params.subCategoryId);
    const subCategoryName = subCategoryTitleSwitcher(subCategoryId);

    return (
      <div className="SpotsPage">
        <h1>{subCategoryName}</h1>
        {spotsCards}
      </div>
    );
  }
}

export default SpotsPage;