import React, { Component } from 'react';

// SOURCE FROM: https://stackoverflow.com/questions/31272207/to-call-onchange-event-after-pressing-enter-key
// APPLIED IN LINE 22

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
              onKeyPress={ (event) => {
                if (event.key === 'Enter') {
                  handleSearch(pesquisa);
                  console.log(pesquisa);
                }
              } }
              value={ pesquisa }
              data-testid="query-input"
              type="text"
              id="searchProduct"
            />
          </label>
        </div>
      </div>
    );
  }
}

export default RenderizaCabecalho;
