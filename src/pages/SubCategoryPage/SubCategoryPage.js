import React from 'react';
import { Link } from 'react-router-dom';
import subCategoriesRequests from '../../firebaseCalls/subCategories';

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
    return (
      <div className="SubCategoryPage">
        <h2>SubCategoryPage</h2>
        <Link to="/spot/:id">
          <button
          type="button"
          className="btn btn-default"
          >
            To Spots
          </button>
        </Link>
      </div>
    );
  }
}

export default SubCategoryPage;