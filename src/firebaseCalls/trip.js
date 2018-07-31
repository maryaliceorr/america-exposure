import axios from 'axios';
import constants from '../constants';

const getTrips = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/trips.json?orderBy="uid"&equalTo="${uid}"`)
      .then(res => {
        const trips = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            trips.push(res.data[fbKey]);
          });
        }
        resolve(trips);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const postTrips = (trip) => {
  return new Promise((resolve, reject) => {
    axios
    .post(`${constants.firebaseConfig.databaseURL}/trips.json`, trip)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    })
  })
};

const deleteTrip = (tripId) => {
  return new Promise((resolve, reject) => {
    axios
    .delete(`${constants.firebaseConfig.databaseURL}/trips/${tripId}.json`)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    })
  })
};

const getSingleTrip = (tripId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/trips/${tripId}.json`)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const putTrip = (tripId) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${constants.firebaseConfig.databaseURL}/trips/${tripId}.json`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })

  });
};

export default {getTrips, postTrips, deleteTrip, getSingleTrip, putTrip};
