import React from 'react';

import bucketListRequests from '../../firebaseCalls/bucketList';
import authRequests from '../../firebaseCalls/auth';
import spotRequests from '../../firebaseCalls/spots';
import BucketSpot from '../../components/BucketSpot/BucketSpot';

import './BucketListPage.css';

class BucketListPage extends React.Component {

state = {
  bucketSpots: [],
  spots: [],
}

deleteBucketSpot = (bucketSpotId) => {
  const uid = authRequests.getUID();
  bucketListRequests
    .deleteBucketSpot(bucketSpotId)
    .then(() => {
      bucketListRequests
      .getBucketSpots(uid)
      .then((bucketSpots) => {
      this.setState({bucketSpots})
      })
      .catch((error) => {
        console.error('error with get BucketSpots', error);
      });
    })
    .catch((error) => {
      console.error('error with deleteBucketSpot', error);
    })
}

  componentDidMount () {
    const uid = authRequests.getUID()
    bucketListRequests
      .getBucketSpots(uid)
      .then((bucketSpots) => {
        this.setState({bucketSpots})
      })
      .catch((error) => {
        console.error('error with getBucketSpots request', error);
      });
    spotRequests
      .getSpots()
      .then((spots) => {
        this.setState({spots});
      })
      .catch((error) => {
        console.error('error with getSpots', error);
      });
  };

  render () {
    const {bucketSpots, spots} = this.state;
    const getBucketSpots = bucketSpots.map((bucketSpot) => {
      const spot = spots.find(x => x.id === bucketSpot.bucketSpotId)
       if (spot)  {return (
         <BucketSpot
          key={bucketSpot.id}
          spot={spot}
          bucketSpotId = {bucketSpot.id}
          deleteSpot = {this.deleteBucketSpot}
         />
        )}
        return '';
      })
    return (
      <div className="BucketListPage">
        <h1 className="text-center">Bucket List</h1>
        {getBucketSpots}
        <div className="extra-space"></div>
      </div>
    );
  }
}

export default BucketListPage;