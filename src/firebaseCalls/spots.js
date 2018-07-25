import axios from 'axios';
import constants from '../constants';

const getSpots = (subCategoryId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/subCategories.json?orderBy="subCategoryId"&equalTo="${subCategoryId}"`)
      .then(res => {
        const spots = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
           spots.push(res.data[fbKey]);
          });
        }
        resolve(spots);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default {getSpots};
