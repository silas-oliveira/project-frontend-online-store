import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: { attributes: [] },
    };
    this.getProductItemFromMlApi = this.getProductItemFromMlApi.bind(this);
  }

  componentDidMount() {
    const { match: { params: { itemID } } } = this.props;
    this.getProductItemFromMlApi(itemID).then((response) => {
      this.setState({
        product: response,
      });
    });
  }

  getProductItemFromMlApi(sku) {
    return fetch(`https://api.mercadolibre.com/items/${sku}`)
      .then((response) => response.json())
      .then((json) => json);
  }

  render() {
    const { product } = this.state;
    const { attributes } = product;

    return (
      <section data-testid="product-detail-name">
        <h2>{ `${product.title} - R$ ${product.price}` }</h2>
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
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default ProductDetails;
