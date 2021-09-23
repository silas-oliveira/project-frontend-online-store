import React from 'react';

class RenderizaNaoEncontrado extends React.Component {
  render() {
    return (
      <div>
        <h2
          data-testid="shopping-cart-empty-message"
        >
          Nenhum produto foi encontrado
        </h2>
      </div>
    );
  }
}

export default RenderizaNaoEncontrado;
