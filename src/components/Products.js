import React, { Component } from 'react';
import Checkbox from './Checkbox';

class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [
        {id: 1, name: 'Americano', price: 3.5},
        {id: 2, name: 'Caffé Latte', price: 4.5},
        {id: 3, name: 'Caffé macchiato', price: 4},
        {id: 4, name: 'Cappuccino', price: 4.5},
        {id: 5, name: 'Frappuccino', price: 5}
      ],
      selectedProducts: []
    };
  }


  handleChange = (e) => {
    const selectedProduct = e.target.value;
    const checkedProduct = e.target.checked;

    this.setState((prevState) => {
      let selectedProductList = [...prevState.selectedProducts];
      if (checkedProduct) {
        const newCheckedProduct = prevState.products.filter(product => {
          return product.id.toString() === selectedProduct;
        })
        selectedProductList = selectedProductList.concat(newCheckedProduct);
      } else {
        selectedProductList = selectedProductList.filter(product => {
          return product.id.toString() !== selectedProduct;
        })
      }
      return {
        ...prevState,
        selectedProducts: selectedProductList
      }
    });
  }

  handleClick = (e) => {
    const summaryPath = "/summary";
    this.props.history.location.pathname = summaryPath;
    this.props.history.push();
  }

  render() {
    const productList = this.state.products.map(product => {
      return (
        <label key={product.id}>
          <Checkbox
            name={`${product.name} $${product.price}`}
            value={product.id}
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

export default Products;
