import axios from 'axios';
import constants from '../constants';

const getSpotStuff = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/spots.json`)
      .then(res => {
        const spotStuff = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            spotStuff.push(res.data[fbKey]);
          });
        }
        resolve(spotStuff);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default {getSpotStuff};
