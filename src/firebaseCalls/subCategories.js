import axios from 'axios';
import constants from '../constants';

const getSubCategories = (categoryId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/subCategories.json?orderBy="categoryId"&equalTo="${categoryId}"`)
      .then(res => {
        const subCategories = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            subCategories.push(res.data[fbKey]);
          });
        }
        resolve(subCategories);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getSubCategoriesTwo = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/subCategories.json`)
      .then(res => {
        const subCategories = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            subCategories.push(res.data[fbKey]);
          });
        }
        resolve(subCategories);
      })
      .catch(error => {
        reject(error);
      });
  });
};



export default {getSubCategories, getSubCategoriesTwo};
