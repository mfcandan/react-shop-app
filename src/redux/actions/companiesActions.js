import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_COMPANY_SUCCESS, payload: category };
}

export function getCompanySuccess(companies) {
  return { type: actionTypes.GET_COMPANY_SUCCESS, payload: companies };
}

export function getCompanies() {
  return function (dispatch) {
    let url = `http://localhost:3000/companies`;
    return fetch(url)
      .then((response) => response.json())
      .then((response) => dispatch(getCompanySuccess(response)));
  };
}
