import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class TelaDetalhes extends Component {
  constructor(props) {
    super(props);

    const { location: { state: { product } } } = this.props;

    this.state = {
      product,
    };
    // this.getProductItemFromMlApi = this.getProductItemFromMlApi.bind(this);
    // this.updateState = this.updateState.bind(this);
  }

  // componentDidMount() {
  // const { location: { state: { product } } } = this.props;
  // // const { match: { params: { itemID } } } = this.props;
  // this.updateState(product);
  // }

  // updateState(product) {
  //   this.setState({
  //     product,
  //   });
  // }

  // getProductItemFromMlApi(sku) {
  //   return fetch(`https://api.mercadolibre.com/items/${sku}`)
  //     .then((response) => response.json())
  //     .then((json) => json);
  // }

  render() {
    const { product } = this.state;
    const { attributes } = product;
    let { price } = product;
    if (price) {
      price = price
        .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    return (
      <main data-testid="product-detail-name">
        <nav>
          <Link to="/shopping-cart">Carrinho</Link>
          <Link to="/">Voltar</Link>
        </nav>
        <section>
          <h2>{ `${product.title} - ${price}` }</h2>
          <div>
            <img src={ product.thumbnail } alt={ product.title } />
          </div>
          <div>
            <h3>Especificações Técnicas</h3>
            <ul>
              { attributes.map(({ name, value_name: valueName }, index) => (
                <li key={ `attribute${index}` }>
                  { `${name}: ${valueName}` }
                </li>
              )) }
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

TelaDetalhes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
  // objectOf(PropTypes.object).isRequired,
};

export default TelaDetalhes;
