import React from 'react';
import { Link } from 'react-router-dom';

import './NewTrip.css';

class NewTrip extends React.Component {
  render () {
    return (
      <div className="NewTrip">
        <h2>NewTrip</h2>
        <Link to="/upcoming-trips">
          <button
          type="button"
          className="btn btn-default"
          >
          To all saved Trips
          </button>
        </Link>
      </div>
    );
  }
}

export default NewTrip;
