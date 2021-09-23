import React, { Component } from 'react';

class RenderizaCabecalho extends Component {
  render() {
    const { pesquisa, handleSearch, handleChange } = this.props;
    return (
      <div className="cabecalho">
        <div className="linha-cabecalho">
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <div className="linha-cabecalho">
          <label htmlFor="searchProduct">
            <input
              onChange={ handleChange }
              onKeyPress={ handleSearch }
              value={ pesquisa }
              data-testid="query-input"
              type="text"
              id="searchProduct"
            />
          </label>
          <button
            type="button"
            onClick={ handleSearch }
            value={ pesquisa }
            data-testid="query-button"
          >
            Pesquisa
          </button>
        </div>
      </div>
    );
  }
}

export default RenderizaCabecalho;
