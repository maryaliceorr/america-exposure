import axios from 'axios';
import constants from '../constants';

const getLandscapeSpots = (subCategoryId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/spots.json?orderBy="landscapeId"&equalTo="${subCategoryId}"`)
      .then(res => {
        const landscapeSpots = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
           landscapeSpots.push(res.data[fbKey]);
          });
        }
        resolve(landscapeSpots);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getRegionSpots = (subCategoryId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/spots.json?orderBy="regionId"&equalTo="${subCategoryId}"`)
      .then(res => {
        const regionSpots = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
           regionSpots.push(res.data[fbKey]);
          });
        }
        resolve(regionSpots);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getTimeSpots = (subCategoryId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/spots.json?orderBy="timeId"&equalTo="${subCategoryId}"`)
      .then(res => {
        const timeSpots = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
           timeSpots.push(res.data[fbKey]);
          });
        }
        resolve(timeSpots);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getSeasonSpots = (subCategoryId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/spots.json?orderBy="seasonId"&equalTo="${subCategoryId}"`)
      .then(res => {
        const seasonSpots = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
           seasonSpots.push(res.data[fbKey]);
          });
        }
        resolve(seasonSpots);
      })
      .catch(error => {
        reject(error);
      });
  });
};


const getSingleSpot = (spotId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/spots/${spotId}.json`)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getSpots = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/spots.json`)
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


export default {getLandscapeSpots, getRegionSpots, getTimeSpots, getSeasonSpots, getSingleSpot, getSpots};
