import React from 'react';
import { Link } from 'react-router-dom';

import './SubCategoryPage.css';

class SubCategoryPage extends React.Component {
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