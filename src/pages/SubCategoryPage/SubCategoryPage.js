import React from 'react';
import { Link } from 'react-router-dom';
import subCategoriesRequests from "../../firebaseCalls/subCategories";

import './SubCategoryPage.css';

class subCategoryPage extends React.Component {

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
    const subCategoryCards = this.state.subCategories.map((subCategory) => {
      const categoryId = this.props.match.params.categoryId;
      return (
        <div key={subCategory.id}>
          <Link to={`/subcategories/${subCategory.id}`}>
            <button
            type="button"
            className="btn btn-default"
            >
              {subCategory.subCategoryName}
            </button>
          </Link>
          </div>
      );
    });
    return (
      <div className="CategoryPage">
        <h2>SubCategoryPage</h2>
        {subCategoryCards}
      </div>
    );
  }
}

export default subCategoryPage;