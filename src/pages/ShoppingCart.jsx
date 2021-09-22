import React from 'react';
import EmptyCart from '../components/EmptyCart';
import { getFromCart } from '../services/localStorageServices';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = { contentCart: [] };
    this.saveState = this.saveState.bind(this);
    this.renderContentCart = this.renderContentCart.bind(this);
  }

  componentDidMount() {
    const contentCart = getFromCart();
    this.saveState(contentCart);
  }

  saveState(contentCart) {
    this.setState({ contentCart });
  }

  renderContentCart() {
    const { contentCart } = this.state;

    const result = contentCart.reduce((formatedArray, current) => {
      const xavez = formatedArray.findIndex(({ content }) => content.id === current.id);
      (xavez >= 0)
        ? formatedArray[xavez].amount += 1
        : formatedArray.push({ content: current, amount: 1 });

      return formatedArray;
    }, []);
    console.log(result);
    return (
      <div>
        {
          contentCart.map(
            (content) => (<p key={ content.id }>{ content.title }</p>),
          )
        }
      </div>
    );
  }

  render() {
    const { contentCart } = this.state;

    return (
      <section>
        {contentCart === [] ? <EmptyCart /> : this.renderContentCart()}
      </section>
    );
  }
}

export default ShoppingCart;
