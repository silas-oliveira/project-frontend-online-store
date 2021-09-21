import React from 'react';
import PropTypes from 'prop-types';

class Produtos extends React.Component {
  render() {
    const { responseAPI } = this.props;
    return (
      <aside>
        { responseAPI.map((items) => (
          <section data-testid="product" key={ items.id }>
            <h3>{ items.title }</h3>
            <img src={ items.thumbnail } alt={ items.title } />
            <p>{`R$ ${items.price}`}</p>
          </section>
        ))}
      </aside>
    );
  }
}

Produtos.propTypes = {
  responseAPI: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Produtos;
