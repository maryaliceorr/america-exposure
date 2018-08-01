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

export default {postBucketSpots, getBucketSpots};
