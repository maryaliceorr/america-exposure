import axios from 'axios';
import constants from '../constants';

const getTripSpots = (tripId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/tripSpot.json?orderBy="tripId"&equalTo="${tripId}"`)
      .then(res => {
        const tripSpots = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            tripSpots.push(res.data[fbKey]);
          });
        }
        resolve(tripSpots);
      })
      .catch(error => {
        reject(error);
      });
  });
};

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

const deleteTripSpot = (tripSpotId) => {
  return new Promise((resolve, reject) => {
    axios
    .delete(`${constants.firebaseConfig.databaseURL}/tripSpot/${tripSpotId}.json`)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    })
  })
};

export default {getTripSpots, postTripSpots, deleteTripSpot};
