import React from 'react';

import bucketListRequests from '../../firebaseCalls/bucketList';
import authRequests from '../../firebaseCalls/auth';
import spotRequests from '../../firebaseCalls/spots';

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
    const getSpots = bucketSpots.map((bucketSpot) => {
      const spot = spots.find(x => x.id === bucketSpot.spotId)
       if (spot)  {return (
        <div key={bucketSpot.id}>
          <h2>{bucketSpot.locationName}</h2>
          <img src={bucketSpot.image} alt={bucketSpot.locationName}/>
          <h2>Hello</h2>
         </div>
        )}
        return '';
    })
    return (
      <div className="BucketListPage">
        {getSpots}
      </div>
    );
  }
}


//     const bucketSpots = this.state.bucketSpots.map((bucketSpot) => {
//       // const imageUrl = require(`${bucketSpot.image}`);
//       return (
//         <div key={bucketSpot.id}>
//           <h2>{bucketSpot.locationName}</h2>
//           <img src={bucketSpot.image} alt={bucketSpot.locationName}/>
//           <h2>Hello</h2>
//         </div>
//       )
//     });
//     return (
//       <div className="BucketList">
//         <h1>Bucket List</h1>
//         {bucketSpots}
//       </div>
//     );
//   }
// }

export default BucketListPage;