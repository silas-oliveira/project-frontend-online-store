import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class NotEmptyCart extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        {
          cart.map((item) => (
            <div key={ item.id }>
              <CartItem item={ item } />
            </div>
          ))
        }
      </div>
    );
  }
}

NotEmptyCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default NotEmptyCart;
