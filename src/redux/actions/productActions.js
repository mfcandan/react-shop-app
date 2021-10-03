import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function handleError(error) {
  console.log(error);
  throw error;
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const error = await response.text;
  throw new Error(error);
}

export function getProducts(productType) {
  return function (dispatch) {
    let url = `http://localhost:3000/items`;
    if (productType) {
      url = url + "?itemType=" + productType + "&_page=0&_limit=16";
    }
    return fetch(url)
      .then((response) => response.json())
      .then((response) => dispatch(getProductsSuccess(response)));
  };
}

export function sortProducts(sortColumn, sortingType, sortCategory) {
  return function (dispatch) {
    let url = `http://localhost:3000/items?itemType=${sortCategory}&_sort=${sortColumn}&_order=${sortingType}&_page=0&_limit=16`;
    return fetch(url)
      .then((response) => response.json())
      .then((response) => dispatch(getProductsSuccess(response)));
  };
}

export function changeSortList(sortingType) {
  return { type: actionTypes.CHANGE_SORTING_SUCCESS, payload: sortingType };
}
