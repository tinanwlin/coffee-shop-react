import React, { Component } from 'react';import { log } from 'util';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Summary extends Component {
  render() {
    const selectedProductsTemplate = this.props.selectedProducts.map((product) => {
      return (
        <div key={product.id}>
          <span>{product.name}</span>
          <br />
          <span>${product.price}</span>
        </div>
      )
    })
    const totalPrice = this.props.selectedProducts.map(product => product.price).reduce((acc, cur) => {
      return acc + cur;
    }, 0)
    
    return (
      <div>
        <h2>Product Summary:</h2>
        {selectedProductsTemplate}
        <p>Total: {totalPrice}</p>
        <Link to='/products'>To Products</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    selectedProducts: state.selectedProducts
  }
}

export default connect(mapStateToProps)(Summary);