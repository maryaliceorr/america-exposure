import React from 'react';
import { Link } from 'react-router-dom';
import categoriesRequest from '../../firebaseCalls/categories';

import './CameraNav.css';

class CameraNav extends React.Component {

state = {
  categories: [],
}

  componentDidMount () {
    categoriesRequest
      .getCategories()
      .then((categories) => {
        this.setState({categories})
      })
      .catch((error) => {
        console.error('error with get Categories request', error);
      });
  };

  render () {


    const categoryComponents = this.state.categories.map((category) => {
      // const imageUrl = require(`${category.imgUrl}`);
      return (
        <div key={category.id}>
        {/* <img src={imageUrl} alt={category.name}/> */}
        <Link to={`/categories/${category.id}`}>
          <button
          type="button"
          className="btn btn-default"
          id={category.id}
          >
            {category.categoryName}
          </button>
        </Link>
        </div>
      )
    });

    return (
      <div className="CameraNav text-center">
        <div className="text-center camera-nav-div">
        <h3 className="choose text-center">CHOOSE A CATEGORY</h3>
          <div className="nav-buttons col-md-4 col-md-offset-4">
              {categoryComponents}
         </div>
        </div>
      </div>
    );
  }
}

export default CameraNav;
