import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class RenderizaCategorias extends React.Component {
  render() {
    const { categorias } = this.props;
    return (
      <aside>
        { categorias.map((category) => (
          <section key={ category.id }>

            data-testid="category"
            to=
            { `/${category.id}` }
            >
            {category.name}

          </section>
        ))}
      </aside>
    );
  }
}

RenderizaCategorias.propTypes = {
  categorias: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default RenderizaCategorias;
