import React from 'react';
import MakeATripForm from '../../components/MakeATripForm/MakeATripForm';

import './MakeATripPage.css';

class MakeATripPage extends React.Component {

  successfulFormPost = () => {
    this.props.history.push("/upcoming-trips");
  }

  render () {
    return (
      <div className="MakeATripPage">
        <h1 className="text-center">Make A Trip</h1>
        <div className="col-xs-12 col-md-6 col-md-offset-3">
          <MakeATripForm successfulFormPost={this.successfulFormPost}/>
        </div>
        <div className="extra-space"></div>
      </div>
    );
  }
}

export default MakeATripPage;