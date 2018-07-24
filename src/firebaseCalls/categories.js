import axios from 'axios';
import constants from '../constants';

const getCategories = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/categories.json`)
      .then(res => {
        const categories = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            categories.push(res.data[fbKey]);
          });
        }
        resolve(categories);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default {getCategories};