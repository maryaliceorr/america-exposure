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



  render () {

    return (
      <div className="EditTripForm">

      </div>
    );
  }
}

export default EditTripForm;
