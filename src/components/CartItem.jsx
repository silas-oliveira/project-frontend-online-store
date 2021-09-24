import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  render() {
    const { item: { content, amount }, handleAddToCart, handleSubToCart } = this.props;
    return (
      <div>
        <button type="button"> X </button>
        <img src={ content.thumbnail } alt={ content.title } />
        <h3 data-testid="shopping-cart-product-name">{ content.title }</h3>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => handleAddToCart(content) }
        >
          +
        </button>
        <p data-testid="shopping-cart-product-quantity">{ amount }</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => handleSubToCart(content) }
        >
          -
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  content: PropTypes.objectOf(Object),
}.isRequired;

export default CartItem;
