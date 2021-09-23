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

    this.state = {
      categorias: [],
      categoria: '',
      pesquisa: '',
      fezPesquisa: false,
      produtos: [],
      achouProdutos: false,
      quantidade: 0,
      // carrinho: [],
    };
    this.search = this.search.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    const carrinho = getFromCart();
    getCategories().then((result) => {
      this.setState({
        categorias: result,
        // carrinho,
        quantidade: (carrinho.length ? carrinho.length : 0),
      });
    });
  }

  handleSearch(event) {
    // SOURCE FROM: https://stackoverflow.com/questions/31272207/to-call-onchange-event-after-pressing-enter-key
    // APPLIED DOWN
    if (event.key === undefined) {
      this.setState({
        categoria: event.target.id,
      });
    }
    const { categoria } = this.state;
    const cat = (event.key !== 'Enter') ? event.target.id : categoria;
    const pesquisa = (event.key === 'Enter' || event.target.type === 'button')
      ? event.target.value : '';
    // console.log(`categoria: ${cat} / pesquisa: ${pesquisa}`);
    if (cat || pesquisa) {
      getProductsFromCategoryAndQuery(cat, pesquisa)
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
    const produto = produtos.find((objeto) => objeto.id === itemId);
    addToCart(produto);
    const carrinho = getFromCart();
    const quantidade = carrinho.length;
    this.setState({
      quantidade,
      // carrinho,
    });
  }

  search(response) {
    const achouProdutos = response.results.length > 0;
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
        <div className="renderiza-categorias">
          <RenderizaCategorias
            categorias={ categorias }
            handleSearch={ this.handleSearch }
          />
        </div>
        <div className="direita">
          <div className="linha-direita">
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
          <div className="linha-direita">
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
              : null }
            { !achouProdutos && fezPesquisa ? <RenderizaNaoEncontrado /> : null }
          </div>
        </div>
      </main>
    );
  }
}

export default TelaPrincipal;
