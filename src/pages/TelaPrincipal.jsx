import React from 'react';
// import { Link } from 'react-router-dom';
import RenderizaCategorias from '../components/RenderizaCategorias';
import RenderizaProdutos from '../components/RenderizaProdutos';
import RenderizaCarrinho from '../components/RenderizaCarrinho';
import RenderizaNenhumaPesquisa from '../components/RenderizaNenhumaPesquisa';
import RenderizaNaoEncontrado from '../components/RenderizaNaoEncontrado';
import RenderizaCabecalho from '../components/RenderizaCabecalho';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import { addToCart, getFromCart } from '../services/localStorageServices';

class TelaPrincipal extends React.Component {
  constructor(props) {
    super(props);

    const carrinho = getFromCart();

    this.state = {
      categorias: [],
      pesquisa: '',
      fezPesquisa: false,
      produtos: [],
      achouProdutos: false,
      quantidade: (carrinho.lenght ? carrinho.lenght : 0),
    };
    this.search = this.search.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleSearchCategory = this.handleSearchCategory.bind(this);
  }

  componentDidMount() {
    getCategories().then((result) => {
      this.setState({
        categorias: result,
      });
    });
  }

  handleSearchCategory(event) {
    const { id } = event.target;
    getProductsFromCategoryAndQuery(id, '').then((response) => this.search(response));
  }

  handleSearch(pesquisa) {
    if (pesquisa) {
      getProductsFromCategoryAndQuery('', pesquisa)
        .then((response) => this.search(response));
    }
  }

  handleChange(event) {
    this.setState({
      pesquisa: event.target.value,
    });
  }

  handleAddToCart(event) {
    const { produtos } = this.state;
    const itemId = event.target.name;
    console.log(itemId);
    const produto = produtos.find((objeto) => objeto.id === itemId);
    console.log(produto);
    addToCart(produto);
    const carrinho = getFromCart();
    console.log(carrinho);
    const quantidade = carrinho.length;
    console.log(quantidade);
    this.setState = {
      quantidade,
      carrinho,
    };
  }

  search(response) {
    // console.log(response);
    const achouProdutos = response.results.length > 0;
    // console.log(achouProdutos);
    this.setState({
      produtos: response.results,
      fezPesquisa: true,
      achouProdutos,
    });
  }

  render() {
    const {
      categorias,
      pesquisa,
      produtos,
      achouProdutos,
      fezPesquisa,
      quantidade,
    } = this.state;
    return (
      <main>
        {console.log(`Teste Qtn 2: ${quantidade}`)}
        <div className="renderiza-categorias">
          <RenderizaCategorias
            categorias={ categorias }
            handleSearchCategory={ this.handleSearchCategory }
          />
        </div>
        <div className="direita">
          <div>
            <div className="cabecalho">
              <RenderizaCabecalho
                pesquisa={ pesquisa }
                handleSearch={ this.handleSearch }
                handleChange={ this.handleChange }
              />

            </div>
            <div className="botao-carrinho">
              <RenderizaCarrinho quantidade={ quantidade } />
            </div>
          </div>
          <div>
            {/* se Produtos vem de Categorias passa categorias
                se Produtos vem de busca pelo input para por input */}
            { fezPesquisa ? null : <RenderizaNenhumaPesquisa /> }
            { achouProdutos && fezPesquisa
              ? (
                <RenderizaProdutos
                  produtos={ produtos }
                  handleAddToCart={ this.handleAddToCart }
                />
              )
              : <RenderizaNaoEncontrado /> }

          </div>
        </div>
      </main>
    );
  }
}

export default TelaPrincipal;
