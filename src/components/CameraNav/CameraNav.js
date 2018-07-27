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
      const imageUrl = require(`${category.imgUrl}`);
      return (
        <div>
        <img src={imageUrl} alt={category.name}/>
        <Link to={`/categories/${category.id}`}>
          <button
          type="button"
          className="btn btn-default"
          >
            {category.categoryName}
          </button>
        </Link>
        </div>
      )
    });
    return (
      <div className="CameraNav">
        <h2>CameraNav</h2>
        {categoryComponents}
      </div>
    );
  }
}

export default CameraNav;
