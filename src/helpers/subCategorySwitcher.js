const spotCategoryMaker = (subCategoryId) => {
  let functionName = '';
  switch (subCategoryId) {
    case 'subCategory01':
      functionName = 'getLandscapeSpots';
      break;
    case 'subCategory02':
      functionName = 'getLandscapeSpots';
      break;
    case 'subCategory03':
      functionName = 'getLandscapeSpots';
      break;
    case 'subCategory04':
      functionName = 'getLandscapeSpots';
      break;
    case 'subCategory05':
      functionName = 'getLandscapeSpots';
      break;
    case 'subCategory06':
      functionName = 'getLandscapeSpots';
      break;
    case 'subCategory07':
      functionName = 'getLandscapeSpots';
      break;
    case 'subCategory08':
      functionName = 'getLandscapeSpots';
      break;
    case 'subCategory09':
      functionName = 'getLandscapeSpots';
      break;
    case 'subCategory10':
      functionName = 'getLandscapeSpots';
      break;
    case 'subCategory11':
      functionName = 'getLandscapeSpots';
      break;
    case 'subCategory12':
      functionName = 'getLandscapeSpots';
      break;
    case 'subCategory13':
      functionName = 'getRegionSpots';
      break;
    case 'subCategory14':
      functionName = 'getRegionSpots';
      break;
    case 'subCategory15':
      functionName = 'getRegionSpots';
      break;
    case 'subCategory16':
      functionName = 'getRegionSpots';
      break;
    case 'subCategory17':
      functionName = 'getRegionSpots';
      break;
    case 'subCategory18':
      functionName = 'getTimeSpots';
      break;
    case 'subCategory19':
      functionName = 'getTimeSpots';
      break;
    case 'subCategory20':
      functionName = 'getTimeSpots';
      break;
    case 'subCategory21':
      functionName = 'getTimeSpots';
      break;
    case 'subCategory22':
      functionName = 'getTimeSpots';
      break;
    case 'subCategory23':
      functionName = 'getTimeSpots';
      break;
    case 'subCategory24':
      functionName = 'getSeasonSpots';
      break;
    case 'subCategory25':
      functionName = 'getSeasonSpots';
      break;
    case 'subCategory26':
      functionName = 'getSeasonSpots';
      break;
    case 'subCategory27':
      functionName = 'getSeasonSpots';
      break;
    case 'subCategory28':
      functionName = 'getSeasonSpots';
      break;
    default:
      functionName = '';
  }
  return functionName;
};

export default spotCategoryMaker;
