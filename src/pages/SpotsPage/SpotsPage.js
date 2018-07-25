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
    return (
      <div className="SubCategoryPage">
        <h2>SpotsPage</h2>
        <Link to="/spots/:id">
          <button
          type="button"
          className="btn btn-default"
          >
            To Individual Spot
          </button>
        </Link>
      </div>
    );
  }
}

export default SpotsPage;