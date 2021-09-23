import React from 'react';
import PropTypes from 'prop-types';

class RenderizaCategorias extends React.Component {
  render() {
    const { categorias, handleSearch } = this.props;
    // const opcaoTodas = {
    //   id: '',
    //   name: 'Todas as categorias',
    // };
    // const catgoriasAlterado = [opcaoTodas, ...categorias];
    const catgoriasAlterado = [...categorias];
    return (
      <aside>
        { catgoriasAlterado.map((category) => (
          <div key={ category.id }>
            <input
              data-testid="category"
              type="radio"
              id={ category.id }
              name="categorias"
              value={ category.id }
              onClick={ handleSearch }
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
  handleSearch: PropTypes.func.isRequired,
};

export default RenderizaCategorias;
