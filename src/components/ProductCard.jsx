import React from 'react';

class ProductCard extends React.Component {
    render() {
        const { title, img } = this.props;
        return (
            <div data-testid="product">
                <img src={img} alt={title} />
                <h2>{ title }</h2>
            </div>
        );
    }
}

export default ProductCard;
