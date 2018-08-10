import React from 'react';
import PropTypes from 'prop-types';

import tripRequests from '../../firebaseCalls/trip';
import authRequests from '../../firebaseCalls/auth';

import './MakeATripForm.css';

const blankTrip = {
  tripName:'',
  date: '',
  notes: '',
};

class MakeATripForm extends React.Component {

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
    alert('Error. Please fill out all form inputs with valid entries.');
  }
}

  render () {
    const {newTrip} = this.state;
    return (
      <div className="MakeATripForm">
        <form onSubmit={this.formSubmission}>
          <div className="form-group">
            <label htmlFor="InputTripName">Trip</label>
            <input
            type="input"
            className="form-control"
            id="tripName"
            placeholder="Example: Out West 2018"
            value={newTrip.tripName}
            onChange={this.tripNameChanged}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputDateOfTrip">Dates</label>
            <input
            type="input"
            className="form-control"
            id="date"
            placeholder="Example: October 20th - November 5th, 2018"
            value={newTrip.date}
            onChange={this.dateChanged}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputTripNotes">Notes</label>
            <input
            type="text"
            className="form-control"
            id="notes"
            placeholder="Example: Will be traveling through Utah, Colorado and Wyoming"
            value={newTrip.notes}
            onChange={this.notesChanged}
            />
          </div>
            <div className="button-container text-center">
              <button
              type="submit"
              className="btn btn-default"
              >
                Create Trip
              </button>
            </div>
        </form>
      </div>
    );
  }
}

export default MakeATripForm;
