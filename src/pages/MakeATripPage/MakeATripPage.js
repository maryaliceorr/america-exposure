import React from 'react';
import MakeATripForm from '../../components/MakeATripForm/MakeATripForm';
import MakeATripButtons from '../../components/MakeATripButtons/MakeATripButtons';

import './MakeATripPage.css';

class MakeATripPage extends React.Component {

  successfulFormPost = () => {
    this.props.history.push("/upcoming-trips");
  }
  render () {
    return (
      <div className="MakeATripPage">
        <h2>MakeATripPage</h2>
        <MakeATripForm
          successfulFormPost = {this.successfulFormPost}
        />
        <MakeATripButtons />
      </div>
    );
  }
}

export default MakeATripPage;