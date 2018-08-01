import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import tripRequests from '../../firebaseCalls/trip';
import authRequests from '../../firebaseCalls/auth';

import './EditTripForm.css';

const blankTrip = {
  tripName:'',
  date: '',
  notes: '',
};

class EditTripForm extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    newTrip: blankTrip,
  }

  formFieldStringState = (variable, e) => {
    const temporaryTrip = {...this.state.newTrip};
    temporaryTrip[variable] = e.target.value;
    this.setState({newTrip: temporaryTrip});
  }

tripNameChanged = (e) => {
  this.formFieldStringState('tripName', e);
}

dateChanged = (e) => {
  this.formFieldStringState('date', e);
}

notesChanged = (e) => {
  this.formFieldStringState('notes', e);
}

postTrip = () => {
  const newTrip = {...this.state.newTrip};
  newTrip.uid = authRequests.getUID();
  newTrip.dateTime = Date.now();
  tripRequests
    .postTrips(newTrip)
    .then(() => {
      this.props.successfulFormPost();
    })
    .catch((error) => {
      console.error('error with postTrips request', error);
    });
}

formSubmission = (e) => {
  const {newTrip} = this.state;
  e.preventDefault();
  if (
    newTrip.tripName &&
    newTrip.date &&
    newTrip.notes
  ) {
    this.postTrip(this.state.newTrip);
      this.setState({newState: blankTrip});
  } else {
    alert('form submission is all wrong');
  }
}

  render () {
    const {newTrip} = this.state;
    return (
      <div className="EditTripForm">
        <form onSubmit={this.formSubmission}>
          <div className="form-group">
            <label htmlFor="InputTripName">Trip Name</label>
            <input
            type="input"
            className="form-control"
            id="tripName"
            placeholder="Trip Name"
            value={newTrip.tripName}
            onChange={this.tripNameChanged}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputDateOfTrip">Date of Your Trip</label>
            <input
            type="input"
            className="form-control"
            id="date"
            placeholder="Date"
            value={newTrip.date}
            onChange={this.dateChanged}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputTripNotes">Notes/Description of your Upcoming Trip</label>
            <input
            type="text"
            className="form-control"
            id="notes"
            placeholder="Notes"
            value={newTrip.notes}
            onChange={this.notesChanged}
            />
          </div>
            <button
            type="submit"
            className="btn btn-default"
            >
              Create Trip
            </button>
        </form>
      </div>
    );
  }
}

export default EditTripForm;
