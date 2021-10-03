import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function sortListReducer(
  state = initialState.sortingType,
  action
) {
  switch (action.type) {
    case actionTypes.GET_SORTING_SUCCESS:
      return action.payload;
    case actionTypes.CHANGE_SORTING_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
