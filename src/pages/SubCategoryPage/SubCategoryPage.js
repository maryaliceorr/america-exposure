import React from 'react';
import { Link } from 'react-router-dom';
import subCategoriesRequests from "../../firebaseCalls/subCategories";

import categoryTitleSwitcher from '../../helpers/categoryTitleSwitcher';

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
        <div className="photo-card" key={subCategory.id}>
          <Link to={`/subcategories/${subCategory.id}`}>
            <img src={imageUrl} alt={subCategory.subCategoryName}/>
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

    const categoryId = (this.props.match.params.categoryId);
    const categoryName = categoryTitleSwitcher(categoryId);

    return (
      <div className="SubCategoryPage">
        <h1>{categoryName}</h1>
        {subCategoryCards}
      </div>
    );
  }
}

export default SubCategoryPage;