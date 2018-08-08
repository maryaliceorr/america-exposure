import React from 'react';
import CameraNav from '../../components/CameraNav/CameraNav';

import './Homepage.css';

class Homepage extends React.Component {
  render () {
    return (
      <div className="Homepage">
      <div className="top-space text-center">
       <img className="homepage-logo text-center" src={require("./images/logo.png")} alt="america exposure logo"/>
        </div>
        {/* <h2 className="text-center">CHOOSE A CATEGORY</h2> */}
        <CameraNav />
      </div>
    );
  }
}

export default Homepage;