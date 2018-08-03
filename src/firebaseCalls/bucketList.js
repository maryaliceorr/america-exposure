import axios from 'axios';
import constants from '../constants';

const postBucketSpots = (spot) => {
  return new Promise((resolve, reject) => {
    axios
    .post(`${constants.firebaseConfig.databaseURL}/bucketList.json`, spot)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    })
  })
};

const getBucketSpots = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/bucketList.json?orderBy="uid"&equalTo="${uid}"`)
      .then(res => {
        const bucketSpots = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            bucketSpots.push(res.data[fbKey]);
          });
        }
        resolve(bucketSpots);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const deleteBucketSpot = (bucketSpotId) => {
  return new Promise((resolve, reject) => {
    axios
    .delete(`${constants.firebaseConfig.databaseURL}/bucketList/${bucketSpotId}.json`)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    })
  })
};

export default {postBucketSpots, getBucketSpots, deleteBucketSpot};
