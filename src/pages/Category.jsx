import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Category extends React.Component {
  constructor() {
    super();
    this.state = { categoryInfos: [] };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { categoryID } = params;
    getProductsFromCategoryAndQuery(categoryID)
      .then(({ results }) => this.setState({ categoryInfos: results }));
  }

  render() {
    const { categoryInfos } = this.state;
    return (
      <div>
        {categoryInfos.map(
          ({ title, id, thumbnail }) => (<ProductCard
            title={ title }
            key={ id }
            img={ thumbnail }
          />),
        )}
      </div>
    );
  }
}

Category.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  match: PropTypes.object,
  categoryID: PropTypes.string,
}.isRequired;

export default Category;
