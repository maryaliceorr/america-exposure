import React from 'react';
import SpotCard from '../../components/SpotCard/SpotCard'
import './SpotPage.css';


class SpotPage extends React.Component {
  render () {
    return (
      <div className="SpotPage">
        <h2>SpotPage</h2>
        <SpotCard />
      </div>
    );
  }
}

export default SpotPage;