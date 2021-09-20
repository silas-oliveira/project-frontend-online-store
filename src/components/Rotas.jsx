import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from '../pages/Search';

class Rotas extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Search } />
        </Switch>
      </div>
    );
  }
}

export default Rotas;
