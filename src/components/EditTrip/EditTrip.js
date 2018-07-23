import React from 'react';

import './EditTrip.css';
import { Link } from 'react-router-dom';
class EditTrip extends React.Component {
  render () {
    return (
      <div className="EditTrip">
        <h2>EditTrip</h2>
        <Link to="/trip/:tripId">
          <button
          type="button"
          className="btn btn-default"
          >
           Save
          </button>
        </Link>

      </div>
    );
  }
}

export default EditTrip;
