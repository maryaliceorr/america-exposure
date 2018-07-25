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

    if (this.props.subCategories.subcategoryId = subcategory01) {
      categoryName = (
        <h1>Landscapes</h1>
      )
    } if (this.props.subCategories.subcategoryId = subcategory01) {
      categoryName = (
        <h1>Regions</h1>
      )
    }  if (this.props.subCategories.subcategoryId = subcategory01) {
      categoryName = (
        <h1>Time of Day</h1>
      )
    } if (this.props.subCategories.subcategoryId = subcategory01) {
      categoryName = (
        <h1>Seasons</h1>
      )
    }

    return (
      <div className="SubCategoryPage">

        {categoryName}
        {subCategoryCards}
      </div>
    );
  }
}

export default subCategoryPage;