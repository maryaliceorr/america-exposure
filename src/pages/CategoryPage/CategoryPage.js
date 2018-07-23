import React from 'react';
import { Link } from 'react-router-dom';

import './CategoryPage.css';

class CategoryPage extends React.Component {
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