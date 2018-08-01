import React from 'react';

import bucketListRequests from '../../firebaseCalls/bucketList';
import authRequests from '../../firebaseCalls/auth';

import './BucketListPage.css';

class BucketListPage extends React.Component {

state = {
  bucketSpots: [],
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
  };

  render () {
    const bucketSpots = this.state.bucketSpots.map((bucketSpot) => {
      // const imageUrl = require(`${bucketSpot.image}`);
      return (
        <div key={bucketSpot.id}>
          <h2>{bucketSpot.locationName}</h2>
          <img src={bucketSpot.image} alt={bucketSpot.locationName}/>
          <h2>Hello</h2>
        </div>
      )
    });
    return (
      <div className="CameraNav">
        <h1>Bucket List</h1>
        {bucketSpots}
      </div>
    );
  }
}

export default BucketListPage;