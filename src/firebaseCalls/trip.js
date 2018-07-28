import axios from 'axios';
import constants from '../constants';

const getTrips = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/trips.json`)
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

export default {getTrips};