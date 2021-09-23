import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

class RenderizaCarrinho extends Component {
  // constructor() {
  //   super()

  // }

  render() {
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          Carrinho de Compras
        </Link>
      </div>
    );
  }
}

export default RenderizaCarrinho;

// propTypes = {
//   prop: PropTypes,
// }
