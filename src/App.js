import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './components/Rotas';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    );
  }
}

export default App;
