import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, img } = this.props;
    return (
      <div data-testid="product">
        <img src={ img } alt={ title } />
        <h2>{ title }</h2>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
}.isRequired;

export default ProductCard;
