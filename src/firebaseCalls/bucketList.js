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

export default {postBucketSpots};
