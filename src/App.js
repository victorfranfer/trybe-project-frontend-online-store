import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductsDetails from './pages/ProductsDetails';

class App extends React.Component {
  state = {
    listProducts: [],
  }

  addToCart = ({ target: { name, id } }) => {
    const { listProducts } = this.state;
    const price = id;
    const product = {
      productName: name,
      productPrice: price,
    };
    listProducts.push(product);
    const productsArray = listProducts;
    console.log(productsArray);
  }; // o parametro id é o preço

  render() {
    const { state: { listProducts }, addToCart } = this;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home addToCart={ addToCart } />
          </Route>
          <Route exact path="/cart">
            <ShoppingCart products={ listProducts } />
          </Route>
          <Route
            exact
            path="/products-details/:id"
            render={ (props) => <ProductsDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
