import React from 'react';
import EmptyCart from '../components/EmptyCart';
import { getFromCart } from '../services/localStorageServices';
import NotEmptyCart from '../components/NotEmptyCart';

class TelaCarrinho extends React.Component {
  constructor() {
    super();
    this.state = { contentCart: [] };
    this.saveState = this.saveState.bind(this);
    this.formatedContentCart = this.formatedContentCart.bind(this);
  }

  componentDidMount() {
    const contentCart = getFromCart();
    this.saveState(contentCart);
  }

  saveState(contentCart) {
    this.setState({ contentCart });
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

  render() {
    const { contentCart } = this.state;

    return (
      <section>
        {
          (contentCart.length === 0)
            ? <EmptyCart /> : <NotEmptyCart cart={ this.formatedContentCart() } />
        }
      </section>
    );
  }
}

export default TelaCarrinho;
