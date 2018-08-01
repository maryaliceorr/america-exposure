import React from 'react';
import EditTripForm from '../../components/EditTripForm/EditTripForm';
import { Link } from 'react-router-dom';

import './EditTripPage.css';

class EditTripPage extends React.Component {

  successfulFormPost = () => {
    this.props.history.push("/upcoming-trips");
  }
  render () {
    return (
      <div className="MakeATripPage">
        <h2>EditTripPage</h2>
          <EditTripForm
            successfulFormPost = {this.successfulFormPost}
          />
      </div>
    );
  }
}

export default EditTripPage;