import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Category from '../pages/Category';
// import Search from '../pages/Search';
// import ShoppingCart from '../pages/ShoppingCart';
import TelaDetalhes from '../pages/TelaDetalhes';
import TelaPrincipal from '../pages/TelaPrincipal';
import TelaCarrinho from '../pages/TelaCarrinho';

class Rotas extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={ TelaPrincipal }
          />
          <Route
            // data-testid="shopping-cart-empty-message"
            path="/shopping-cart"
            component={ TelaCarrinho }
          />
          <Route
            exact
            path="/product/:itemID"
            render={ ({ match, location }) => (
              <TelaDetalhes
                match={ match }
                location={ location }
              />
            ) }
          />
        </Switch>
      </div>
    );
  }
}

export default Rotas;
