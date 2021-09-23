import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  render() {
    const { item: { content, amount } } = this.props;
    console.log(amount);
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{ content.title }</p>
        <p data-testid="shopping-cart-product-quantity">{ amount }</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  content: PropTypes.objectOf(Object),
}.isRequired;

export default CartItem;
