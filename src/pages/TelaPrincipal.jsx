import React from 'react';
import { Link } from 'react-router-dom';
import RenderizaCategorias from '../components/RenderizaCategorias';
import RenderizaProdutos from '../components/RenderizaProdutos';
import RenderizaCarrinho from '../components/RenderizaCarrinho';
import RenderizaNenhumaPesquisa from '../components/RenderizaNenhumaPesquisa';
import RenderizaNaoEncontrado from '../components/RenderizaNaoEncontrado';
import RenderizaCabecalho from '../components/RenderizaCabecalho';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class TelaPrincipal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categorias: [],
      pesquisa: '',
      produtos: [],
      achouProdutos: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    getCategories().then((result) => {
      this.setState({
        categorias: result,
      });
    });
  }

  handleClick() {
    const { pesquisa } = this.state;
    getProductsFromCategoryAndQuery('', pesquisa).then((response) => {
      this.setState({
        produtos: response.results,
      });
    });
  }

  handleChange(event) {
    this.setState({
      pesquisa: event.target.value,
    });
  }

  render() {
    const { categorias, pesquisa, produtos, achouProdutos } = this.state;
    return (
      <main>
        <div className="renderiza-categorias">
          <RenderizaCategorias categorias={ categorias } />
        </div>
        <div className="direita">
          <div>
            <div className="cabecalho">
              <RenderizaCabecalho
                pesquisa={ pesquisa }
                handleClick={ this.handleClick }
                handleChange={ this.handleChange }
              />

            </div>
            <div className="botao-carrinho">
              <RenderizaCarrinho />
            </div>
          </div>
          <div>
            {/* se Produtos vem de Categorias passa categorias
                se Produtos vem de busca pelo input para por input */}
            { fezPesquisa ? null : <RenderizaNenhumaPesquisa /> }
            { achouProdutos && fezPesquisa
              ? <RenderizaProdutos produtos={ produtos } />
              : <RenderizaNaoEncontrado /> }

          </div>
        </div>
      </main>
    );
  }
}

export default TelaPrincipal;
