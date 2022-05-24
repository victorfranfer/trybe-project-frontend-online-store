import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <Link to="/cart" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>
      </div>
    );
  }
}

export default Home;
