import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Category from '../pages/Category';
import Search from '../pages/Search';
import ShoppingCart from '../pages/ShoppingCart';

class Rotas extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact path="/"
            component={ Search }
          />
          <Route
            data-testid="shopping-cart-empty-message"
            path="/shopping-cart"
            component={ ShoppingCart }
          />
          <Route
            exact path="/:categoryID"
            render={ ({ match }) => <Category match={ match } /> }
          />
        </Switch>
      </div>
    );
  }
}

export default Rotas;
