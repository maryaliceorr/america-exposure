import React from 'react';
import CameraNav from '../../components/CameraNav/CameraNav';

import './Homepage.css';

class Homepage extends React.Component {
  render () {
    return (
      <div className="Homepage">
        <div className="top-space text-center">
          <img className="homepage-logo text-center" src={require("./images/logo.png")} alt="america exposure logo"/>
          <p className="mountains col-md-8 col-md-offset-2">"The mountains are calling and I must go." -John Muir</p>
        </div>
      <CameraNav />
      </div>
    );
  }
}

export default Homepage;