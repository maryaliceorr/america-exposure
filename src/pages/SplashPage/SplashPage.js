import React from 'react';

import './SplashPage.css';

class SplashPage extends React.Component {
  render () {
    return (
      <div className="SplashPage container">
        <div className="top-space text-center">
          <img className="splash-logo text-center fadeInDown" src={require("./images/logo.png")} alt="america exposure logo"/>
        </div>
        <h3 className="text-center fadeInUp"><strong>OUR MISSION: </strong>To expose hidden landscape gems in the United States for all photographers to find.</h3>
        <div className="extra-space"></div>
      </div>
    );
  }
}

export default SplashPage;