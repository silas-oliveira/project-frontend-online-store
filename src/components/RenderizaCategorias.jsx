import React from 'react';
import PropTypes from 'prop-types';

class RenderizaCategorias extends React.Component {
  render() {
    const { categorias, handleSearchCategory } = this.props;
    const opcaoTodas = {
      id: 'todas',
      name: 'Todas as categorias',
    };
    const catgoriasAlterado = [opcaoTodas, ...categorias];
    return (
      <aside>
        { catgoriasAlterado.map((category) => (
          <div key={ category.id }>
            <input
              type="radio"
              id={ category.id }
              name="categorias"
              value={ category.id }
              onClick={ handleSearchCategory }
            />
            <label htmlFor={ category.id }>{category.name}</label>
          </div>
        ))}
      </aside>
    );
  }
}

RenderizaCategorias.propTypes = {
  categorias: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSearchCategory: PropTypes.func.isRequired,
};

export default RenderizaCategorias;
