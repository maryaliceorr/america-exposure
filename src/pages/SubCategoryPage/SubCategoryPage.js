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
        <div className="photo-card col-md-4" key={subCategory.id}>
          <Link to={`/subcategories/${subCategory.id}`}>
            <div className="spot-container">
              <img className="spot-pic" src={imageUrl} alt={subCategory.subCategoryName}/>
            </div>
              <div className="text-center">
                <button
                type="button"
                className="text-center btn btn-default"
                >
                  {subCategory.subCategoryName}
                </button>
              </div>

          </Link>
        </div>
      );
    });

    const categoryId = (this.props.match.params.categoryId);
    const categoryName = categoryTitleSwitcher(categoryId);

    return (
      <div className="SubCategoryPage">
        <h1 className="text-center">{categoryName}</h1>
        <div className="text-center">
        {subCategoryCards}
        </div>
        <div className="extra-space"></div>
      </div>
    );
  }
}

export default SubCategoryPage;