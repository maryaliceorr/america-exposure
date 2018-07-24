import React from 'react';
import { Link } from 'react-router-dom';

import './MakeATripForm.css';

class MakeATripForm extends React.Component {
  render () {
    return (
      <div className="MakeATripForm">
        <form>
          <div className="form-group">
            <label htmlFor="InputTripName">Trip Name</label>
            <input type="input" className="form-control" id="inputTripName" placeholder="Trip Name" />
          </div>
          <div className="form-group">
            <label htmlFor="InputDateOfTrip">Date of Your Trip</label>
            <input type="input" className="form-control" id="inputDate" placeholder="Date" />
          </div>
          <div className="form-group">
            <label htmlFor="InputTripNotes">Notes/Description of your Upcoming Trip</label>
            <input type="text" id="inputNotes" className="form-control" placeholder="Notes"/>
          </div>
            <Link to="/new/trip">
            <button
            type="button"
            className="btn btn-default"
            >
              Create Trip
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default MakeATripForm;
