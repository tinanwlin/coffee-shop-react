import { FETCHED_PRODUCT } from './types';

export const updateSelectedProductList = (selectedProductList) => {
  return {
    type: FETCHED_PRODUCT,
    selectedProductList: selectedProductList
  }
}