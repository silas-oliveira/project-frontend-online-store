import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class RenderizaCarrinho extends Component {
  // constructor() {
  //   super()

  // }

  render() {
    const { quantidade } = this.props;
    console.log(`Teste de Qnt: ${quantidade}`);
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/shopping-cart"
        >
          {`Carrinho de Compra: ${quantidade}`}
        </Link>
      </div>
    );
  }
}

RenderizaCarrinho.propTypes = {
  quantidade: PropTypes.number.isRequired,
};

export default RenderizaCarrinho;
