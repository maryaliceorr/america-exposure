const spotCategoryMaker = (subCategoryId) => {
  let name = '';
  switch (subCategoryId) {
    case 'subCategory01':
      name = 'Rivers';
      break;
    case 'subCategory02':
      name = 'Oceans';
      break;
    case 'subCategory03':
      name = 'Waterfalls';
      break;
    case 'subCategory04':
      name = 'Canyons';
      break;
    case 'subCategory05':
      name = 'Forests';
      break;
    case 'subCategory06':
      name = 'Lakes';
      break;
    case 'subCategory07':
      name = 'Mountains';
      break;
    case 'subCategory08':
      name = 'Rock Formations';
      break;
    case 'subCategory09':
      name = 'Dunes/Beaches';
      break;
    case 'subCategory10':
      name = 'Non-Nature';
      break;
    case 'subCategory11':
      name = 'Pools/Springs';
      break;
    case 'subCategory12':
      name = 'Scenic Byways';
      break;
    case 'subCategory13':
      name = 'West';
      break;
    case 'subCategory14':
      name = 'Midwest';
      break;
    case 'subCategory15':
      name = 'Northeast';
      break;
    case 'subCategory16':
      name = 'Southeast';
      break;
    case 'subCategory17':
      name = 'Southwest';
      break;
    case 'subCategory18':
      name = 'Sunrise';
      break;
    case 'subCategory19':
      name = 'Morning';
      break;
    case 'subCategory20':
      name = 'Afternoon';
      break;
    case 'subCategory21':
      name = 'Sunset';
      break;
    case 'subCategory22':
      name = 'Night';
      break;
    case 'subCategory23':
      name = 'All Day';
      break;
    case 'subCategory24':
      name = 'Spring';
      break;
    case 'subCategory25':
      name = 'Summer';
      break;
    case 'subCategory26':
      name = 'Fall';
      break;
    case 'subCategory27':
      name = 'Winter';
      break;
    case 'subCategory28':
      name = 'All Year';
      break;
    default:
      name = '';
  }
  return name;
};

export default spotCategoryMaker;
