import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromQuery } from '../services/api';

class ProductsDetails extends React.Component {
  state = {
    productPrice: 0,
    productName: '',
    productImage: '',
    // productId: '',
  }

  componentDidMount() {
    this.requestApi();
  }

  requestApi = async () => {
    // console.log(this.props.match);
    const { match: { params: { id } } } = this.props;
    /* const { productId } = this.state;
    this.setState({ productId: id }); */
    const result = await getProductsFromQuery(id);
    const { title, thumbnail, price } = result;
    this.setState({
      productPrice: price,
      productName: title,
      productImage: thumbnail,
    });
  }

  render() {
    const { productPrice, productName, productImage } = this.state;
    return (
      <div>
        <img src={ productImage } alt={ productName } />
        <h2 data-testid="product-detail-name">{ productName }</h2>
        <h5>{ productPrice }</h5>
      </div>
    );
  }
}
// atualizando branch

ProductsDetails.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ProductsDetails;
