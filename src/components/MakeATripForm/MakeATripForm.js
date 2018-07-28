import React from 'react';
import { Link } from 'react-router-dom';

import './MakeATripForm.css';

const blankTrip = {
  tripName:'',
  date: '',
  notes: '',
};

class MakeATripForm extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
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

formSubmission = (e) => {
  const {onSubmission} = this.props;
  const {newTrip} = this.state;
  e.preventDefault();
  if (
    newTrip.tripName &&
    newTrip.date &&
    newTrip.notes
  ) {
    onSubmission(this.state.newTrip);
    this.setState({newState: blankTrip});
  } else {
    alert('form submission is all wrong');
  }
}

  render () {
    const {newTrip} = this.state;
    return (
      <div className="MakeATripForm">
        <form onSubmit={this.formSubmission}>
          <div className="form-group">
            <label htmlFor="InputTripName">Trip Name</label>
            <input
            type="input"
            className="form-control"
            id="tripName"
            placeholder="Trip Name" />
            value={newTrip.tripName}
            onChange={this.tripNameChanged}
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
