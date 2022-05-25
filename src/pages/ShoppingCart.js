import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  state = {
    listProducts: [],
  }

  componentDidMount() {
    const { products } = this.props;
    this.setState({ listProducts: products });
  }

  render() {
    const { listProducts } = this.state;
    return (
      listProducts.length > 0
        ? listProducts.map((product) => (
          <div key={ product.productName }>
            <span data-testid="shopping-cart-product-name">{product.productName}</span>
            <span>{product.productPrice}</span>
            <span data-testid="shopping-cart-product-quantity">1</span>
          </div>
        )) : (
          <div>
            <h4 data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </h4>
          </div>
        )
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default ShoppingCart;
