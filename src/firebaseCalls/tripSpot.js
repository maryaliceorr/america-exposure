import axios from 'axios';
import constants from '../constants';

const postTripSpots = (tripSpot) => {
  return new Promise((resolve, reject) => {
    axios
    .post(`${constants.firebaseConfig.databaseURL}/tripSpot.json`, tripSpot)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    })
  })
};

export default {postTripSpots};
