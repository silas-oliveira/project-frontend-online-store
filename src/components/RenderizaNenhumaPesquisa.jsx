import React from 'react';

class RenderizaNenhumaPesquisa extends React.Component {
  render() {
    return (
      <div>
        <h2
          data-testid="shopping-cart-empty-message"
        >
          Você ainda não realizou uma busca
        </h2>
      </div>
    );
  }
}

export default RenderizaNenhumaPesquisa;
