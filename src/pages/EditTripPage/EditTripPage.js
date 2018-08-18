import React from 'react';
import tripRequests from '../../firebaseCalls/trip';

import './EditTripPage.css';

class EditTripPage extends React.Component {

  state = {
    trip: {
      tripName: "",
      date: "",
      notes: "",
    },
  }

formFieldStringState = (variable, e) => {
  const temporaryTrip = {...this.state.trip};
  temporaryTrip[variable] = e.target.value;
  this.setState({trip: temporaryTrip});
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

componentDidMount () {
  const singleTripId = this.props.match.params.tripId;
  tripRequests
    .getSingleTrip(singleTripId)
    .then((singleTrip) => {
      this.setState({trip: singleTrip});
    })
    .catch((error) => {
      console.error('error with getTrip', error);
    });
};

editTrip = (trip) => {
    const tripId = this.props.match.params.tripId;
    tripRequests
      .putTrip(trip, tripId)
      .then(() => {
        this.props.history.push("/upcoming-trips");
      })
      .catch((error) => {
        console.error('error with deleteSpot', error);
      })
  }


formSubmission = (e) => {
  const {trip} = this.state;
  e.preventDefault();
  if (
    trip.tripName &&
    trip.date &&
    trip.notes
  ) {
    this.editTrip(trip);
  } else {
    alert('Error. Please fill out all form inputs with valid entries.');
  }
}

  render () {
    const {trip} = this.state;
    return (
      <div className="EditTripPage">
        <h1 className="text-center">Edit Trip</h1>
        <div className="col-xs-12 col-md-6 col-md-offset-3">
          <form onSubmit={this.formSubmission}>
            <div className="form-group">
              <label htmlFor="InputTripName">Trip Name</label>
              <input
              type="input"
              className="form-control"
              id="tripName"
              placeholder="Trip Name"
              value={trip.tripName}
              onChange={this.tripNameChanged}
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputDateOfTrip">Dates</label>
              <input
              type="input"
              className="form-control"
              id="date"
              placeholder="Dates"
              value={trip.date}
              onChange={this.dateChanged}
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputTripNotes">Notes</label>
              <input
              type="text"
              className="form-control"
              id="notes"
              placeholder="Notes"
              value={trip.notes}
              onChange={this.notesChanged}
              />
            </div>
            <div className="button-container text-center">
              <button
              type="submit"
              className="btn btn-default"
              >
                Save Trip
              </button>
              </div>
            </form>
          </div>
          <div className="extra-space"></div>
      </div>
    );
  }
}

export default EditTripPage;