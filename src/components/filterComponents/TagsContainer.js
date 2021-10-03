import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as companiesActions from "../../redux/actions/companiesActions";
import * as productActions from "../../redux/actions/productActions";

class TagsContainer extends Component {
  render() {
    return (
      <StyledContainer>
        <StyledHeader style={{ color: "#697488" }}>Tags</StyledHeader>
        <StyledWrapper>
          <StyledForm>
            <StyledSearch placeholder="Search tag" />
            <StyledCheckboxList>
              <StyledInput>
                <StyledCheckbox type="checkbox" /> All{" "}
                <StyledCheckCount>(18)</StyledCheckCount>
              </StyledInput>
              <StyledInput>
                <StyledCheckbox type="checkbox" /> All{" "}
                <StyledCheckCount>(18)</StyledCheckCount>
              </StyledInput>
              <StyledInput>
                <StyledCheckbox type="checkbox" /> All{" "}
                <StyledCheckCount>(18)</StyledCheckCount>
              </StyledInput>
              <StyledInput>
                <StyledCheckbox type="checkbox" /> All{" "}
                <StyledCheckCount>(18)</StyledCheckCount>
              </StyledInput>
            </StyledCheckboxList>
          </StyledForm>
        </StyledWrapper>
      </StyledContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companyListReducer,
    currentCategory: state.changeCategoryReducer,
    sortingType: state.sortingListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getTags: bindActionCreators(productActions.getTags, dispatch),
      getCompanies: bindActionCreators(companiesActions.getCompanies, dispatch),
      getProductsByFilter: bindActionCreators(
        productActions.getProductsByFilter,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsContainer);

const StyledContainer = styled.div`
  margin-bottom: 1.5em;
`;

const StyledWrapper = styled.div`
  background-color: #fff;
  border-radius: 2px;
  width: 18.5em;
  height: 15.25em;
  padding-top: 0.75em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.p`
  font-size: 0.81rem;
  font-weight: 600;
  margin-bottom: 0.75em;
`;

const StyledForm = styled.form``;

const StyledSearch = styled.input`
  justify-self: left;
  width: 15.5em;
  height: 3em;
  font-size: 0.88rem;
  color: #a8a8a8;
  border: 2px solid #e0e0e0;
  border-radius: 2px;
  margin-top: 1.5em;
  margin-bottom: 1.06em;
  padding-left: 1em;
`;

const StyledCheckboxList = styled.div`
  border: none;
  height: 8.06em;
  overflow-y: scroll;
`;

const StyledInput = styled.div`
  font-size: 0.88rem;
  color: #525252;
  display: flex;
  margin-bottom: 1em;
  margin-left: 3px;
  margin-top: 3px;
`;

const StyledCheckbox = styled.input`
  width: 1.38em;
  height: 1.38em;
  margin-right: 0.5em;
  box-shadow: 0px 1px 7px #5d38c066;
  border-radius: 2px;
`;

const StyledCheckCount = styled.div`
  color: #a8a8a8;
  font-size: 0.88rem;
  margin-left: 0.25em;
`;
