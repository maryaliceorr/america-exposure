import React from 'react';
import { Link } from 'react-router-dom';
import subCategoriesRequests from "../../firebaseCalls/subCategories";

import './SubCategoryPage.css';

class SubCategoryPage extends React.Component {

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
      const imageUrl = require(`${subCategory.imgUrl}`);
      return (
        <div key={subCategory.id}>
          <Link to={`/subcategories/${subCategory.id}`}>
            <img src={imageUrl} alt="subCategory.subCategoryName"/>
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

    const actualCategoryName = (this.props.match.params.categoryId);

    let categoryName = "";
    if (actualCategoryName === "category01") {
      categoryName = (
        <h1>Landscapes</h1>
      )
    } if (actualCategoryName === "category02") {
      categoryName = (
        <h1>Regions</h1>
      )
    }  if (actualCategoryName === "category03") {
      categoryName = (
        <h1>Time of Day</h1>
      )
    } if (actualCategoryName === "category04") {
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

export default SubCategoryPage;