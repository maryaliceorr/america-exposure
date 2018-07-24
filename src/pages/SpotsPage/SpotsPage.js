 import React from 'react';
 import SpotCard from '../../components/SpotCard/SpotCard';
import './SpotsPage.css';

class SpotsPage extends React.Component {
  render () {
    return (
      <div className="SpotsPage">
        <h2>SpotsPage</h2>
        <SpotCard />
      </div>
    );
  }
}

export default SpotsPage;