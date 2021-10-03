import * as actionTypes from "./actionTypes";

export function getCompanySuccess(companies) {
  return { type: actionTypes.GET_COMPANY_SUCCESS, payload: companies };
}

export function getCompanies(searchTerm) {
  let url = `http://localhost:3000/companies`;
  if (searchTerm) {
    url += "?q=" + searchTerm;
  }
  return function (dispatch) {
    return fetch(url)
      .then((response) => response.json())
      .then((response) => dispatch(getCompanySuccess(response)));
  };
}
