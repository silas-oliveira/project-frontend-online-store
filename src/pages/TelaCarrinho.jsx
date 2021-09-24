import React from 'react';
import EmptyCart from '../components/EmptyCart';
import NotEmptyCart from '../components/NotEmptyCart';
import { addToCart, getFromCart, subToCart } from '../services/localStorageServices';

class TelaCarrinho extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contentCart: [] };
    this.saveState = this.saveState.bind(this);
    this.formatedContentCart = this.formatedContentCart.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleSubToCart = this.handleSubToCart.bind(this);
  }

  componentDidMount() {
    const contentCart = getFromCart();
    this.saveState(contentCart);
  }

  handleAddToCart(item) {
    addToCart(item);
    const carrinho = getFromCart();
    this.setState({
      contentCart: carrinho,
    });
  }

  handleSubToCart(item) {
    subToCart(item);
    const carrinho = getFromCart();
    this.setState({
      contentCart: carrinho,
    });
  }

  formatedContentCart() {
    const { contentCart } = this.state;

    return contentCart.reduce((formatedArray, current) => {
      const maybeIndex = formatedArray
        .findIndex(({ content }) => content.id === current.id);
      if (maybeIndex >= 0) {
        formatedArray[maybeIndex].amount += 1;
      } else {
        formatedArray.push({ content: current, amount: 1 });
      }
      return formatedArray;
    }, []);
  }

  saveState(contentCart) {
    this.setState({ contentCart });
  }

  render() {
    const { contentCart } = this.state;

    return (
      <section>
        {
          (contentCart.length === 0)
            ? <EmptyCart />
            : (
              <NotEmptyCart
                cart={ this.formatedContentCart() }
                handleAddToCart={ this.handleAddToCart }
                handleSubToCart={ this.handleSubToCart }
              />
            )
        }
      </section>
    );
  }
}

export default TelaCarrinho;
