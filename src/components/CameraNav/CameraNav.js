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
        <div className="top-space text-center">
          <img className="homepage-logo text-center" src={require("./brand/logo.png")} alt="america exposure logo"/>
        </div>
        <h2>Pick a Category</h2>
        <div className="text-center camera-nav-div">
          <div className="nav-buttons">{categoryComponents}</div>
        </div>
      </div>
    );
  }
}

export default CameraNav;
