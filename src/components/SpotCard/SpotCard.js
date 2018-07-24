import React from 'react';
import spotStuff from '../../firebaseCalls/spotStuff';
import AllSpotsInfo from '../AllSpotsInfo/AllSpotsInfo';

import './SpotCard.css';


class SpotCard extends React.Component {
  state = {
    spots: [],
  }

  componentDidMount () {
    spotStuff
      .getSpotStuff()
      .then((spots) => {
        this.setState({spots});
      })
      .catch((error) => {
        console.error('error with get request for Spots', error);
      });
  }

  render () {
    const spotsComponents = this.state.spots.map((spots) => {
      return(
        <Spots
          key={spots.id}
          spotsInfo={spots}
        />
      );
    });
    return (
      <div className="SpotsCard">
        <h2>SpotCard</h2>
        <div>
          {spotsComponents}
        </div>
      </div>
    );
  }
}

export default SpotCard;
