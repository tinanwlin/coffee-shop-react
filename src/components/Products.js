import React, { Component } from 'react';
import Checkbox from './Checkbox';
import { connect } from 'react-redux';
import { updateSelectedProductList } from '../actions/fetchAction';

class Products extends Component {

  handleChange = (e) => {
    const selectedProduct = e.target.value;
    const checkedProduct = e.target.checked;

    let selectedProductList = [...this.props.selectedProducts];
    if (checkedProduct) {
      const newCheckedProduct = this.props.products.filter(product => {
        return product.id.toString() === selectedProduct;
      })
      selectedProductList = selectedProductList.concat(newCheckedProduct);
    } else {
      selectedProductList = selectedProductList.filter(product => {
        return product.id.toString() !== selectedProduct;
      })
    }
    this.props.updateSelectedProductList(selectedProductList);
  }

  handleClick = (e) => {
    const summaryPath = "/summary";
    this.props.history.location.pathname = summaryPath;
    this.props.history.push();
  }

  render() {
    const selectedProductIds = [...this.props.selectedProducts].map(product => product.id);
    const productList = this.props.products.map(product => {
      return (
        <label key={product.id}>
          <Checkbox
            name={`${product.name} $${product.price}`}
            value={product.id}
            checked={selectedProductIds.includes(product.id) ? "checked" : null}
            onChange={this.handleChange} />
          </label>
      )
    });
    return (
      <div className="container">
        <h4>All Products:</h4>
        <div>
          {productList}
        </div>
        <button onClick={this.handleClick}>Go to Summary</button>
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateSelectedProductList: (selectedProducts) => dispatch(updateSelectedProductList(selectedProducts))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);
