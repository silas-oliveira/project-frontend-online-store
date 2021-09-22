import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addToCart } from '../services/localStorageServices';

class Produtos extends React.Component {
  render() {
    const { responseAPI } = this.props;
    return (
      <aside>
        { responseAPI.map((item) => (
          <div key={ item.id }>
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
              data-testid="product-add-to-cart"
              onClick={ () => addToCart(item) }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </aside>
    );
  }
}

Produtos.propTypes = {
  responseAPI: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Produtos;
