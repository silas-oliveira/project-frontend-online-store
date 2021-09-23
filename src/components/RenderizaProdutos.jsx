import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class RenderizaProdutos extends React.Component {
  render() {
    const { produtos, handleAddToCart } = this.props;
    return (
      <aside>
        { produtos.map((item) => (
          <div
            key={ item.id }
          >
            <Link
              to={ {
                pathname: `/product/${item.id}`,
                state: { product: item },
              } }
              data-testid="product-detail-link"
            >
              <section data-testid="product">
                <h3>{ item.title }</h3>
                <img src={ item.thumbnail } alt={ item.title } />
                <p>{ `R$ ${item.price}` }</p>
              </section>
            </Link>
            <button
              type="button"
              name={ item.id }
              data-testid="product-add-to-cart"
              onClick={ handleAddToCart }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </aside>
    );
  }
}

RenderizaProdutos.propTypes = {
  produtos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
export default RenderizaProdutos;
