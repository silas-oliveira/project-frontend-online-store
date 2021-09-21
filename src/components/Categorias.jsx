import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Categorias extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <aside>
        { categories.map((category) => (
          <section key={ category.id }>
            <Link
              data-testid="category"
              to={ `/${category.id}` }
            >
              {category.name}
            </Link>
          </section>
        ))}
      </aside>
    );
  }
}

Categorias.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Categorias;
