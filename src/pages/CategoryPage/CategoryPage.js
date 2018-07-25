import React from 'react';
import { Link } from 'react-router-dom';
import subCategoriesRequests from "../../firebaseCalls/subCategories";

import './CategoryPage.css';

class CategoryPage extends React.Component {

  state = {
    subCategories: [],
  }

    componentDidMount () {
      const categoryId = this.props.match.params.categoryId;
      subCategoriesRequests
      .getSubCategories(categoryId)
      .then((subCategories) => {
        this.setState({subCategories})
      })
      .catch((error) => {
        console.error('error with get subCategories request', error);
      });
    };
  render () {
    return (
      <div className="CategoryPage">
        <h2>CategoryPage</h2>
        <Link to="/spots/:filterType/:id">
          <button
          type="button"
          className="btn btn-default"
          >
            SubCategoryPage
          </button>
        </Link>
      </div>
    );
  }
}

export default CategoryPage;