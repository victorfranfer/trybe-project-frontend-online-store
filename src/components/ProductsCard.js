import React from 'react';
import PropTypes from 'prop-types';

class ProductsCard extends React.Component {
  render() {
    const { name, image, price } = this.props;
    return (
      <div data-testid="product">
        <h4>{ name }</h4>
        <img src={ image } alt={ name } />
        <span>
          Preço:
          { price }
        </span>
      </div>
    );
  }
}

ProductsCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ProductsCard;
