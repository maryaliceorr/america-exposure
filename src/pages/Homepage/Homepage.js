import React from 'react';
import CameraNav from '../../components/CameraNav/CameraNav';

import './Homepage.css';

class Homepage extends React.Component {
  render () {
    return (
      <div className="Homepage">
        <CameraNav />
      </div>
    );
  }
}

export default Homepage;