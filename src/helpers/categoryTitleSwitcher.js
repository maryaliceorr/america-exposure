const categoryMaker = (categoryId) => {
  let name = '';
  switch (categoryId) {
    case 'category01':
      name = "Landscape Types"
      break;
    case 'category02':
      name = "Regions"
      break;
    case 'category03':
      name = "Time of day";
      break;
    case 'category04':
      name = "Seasons";
      break;
    default:
      name = '';
  }
  return name;
};

export default categoryMaker;
