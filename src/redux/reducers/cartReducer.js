import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (count) => count.product.name === action.payload.product.name
      );
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.name === action.payload.product.name) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }
    case actionTypes.INCREASE_QUANTITY:
      var increaseItem = state.find(
        (count) => count.product.name === action.payload.product.name
      );
      var increasedItem = state.map((cartItem) => {
        if (cartItem.product.name === action.payload.product.name) {
          return Object.assign({}, increaseItem, {
            quantity: increaseItem.quantity + 1,
          });
        }
        return cartItem;
      });
      return increasedItem;
    case actionTypes.DECREASE_QUANTITY:
      var decreaseItem = state.find(
        (count) => count.product.name === action.payload.product.name
      );
      var decreasedItem = state.map((cartItem) => {
        if (cartItem.product.name === action.payload.product.name) {
          return Object.assign({}, decreaseItem, {
            quantity: decreaseItem.quantity - 1,
          });
        }
        return cartItem;
      });
      return decreasedItem;
    case actionTypes.REMOVE_FROM_CART:
      const newState2 = state.filter(
        (cartItem) => cartItem.product.name !== action.payload.name
      );
      return newState2;
    default:
      return state;
  }
}
