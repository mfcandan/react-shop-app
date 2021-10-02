import * as actionTypes from "./actionTypes";

export function addToCart(cartItem) {
  return { type: actionTypes.ADD_TO_CART, payload: cartItem };
}

export function IncreaseQuantity(cartItem) {
  return { type: actionTypes.INCREASE_QUANTITY, payload: cartItem };
}

export function DecreaseQuantity(cartItem) {
  return { type: actionTypes.DECREASE_QUANTITY, payload: cartItem };
}

export function removeFromCart(product) {
  return { type: actionTypes.REMOVE_FROM_CART, payload: product };
}
