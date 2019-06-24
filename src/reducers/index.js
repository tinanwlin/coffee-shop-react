import { FETCHED_PRODUCT } from '../actions/types';
const initialState = {
  products: [
    {id: 1, name: 'Americano', price: 3.5},
    {id: 2, name: 'Caffé Latte', price: 4.5},
    {id: 3, name: 'Caffé macchiato', price: 4},
    {id: 4, name: 'Cappuccino', price: 4.5},
    {id: 5, name: 'Frappuccino', price: 5}
  ],
  selectedProducts: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_PRODUCT:
      return {
        ...state,
        selectedProducts: action.selectedProductList
      }
    default: 
      return state;
  }
}

export default rootReducer;

