import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as companiesActions from "../../redux/actions/companiesActions";
import * as productActions from "../../redux/actions/productActions";

class BrandsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCompanies: [],
    };
    this.handleSelectCompany = this.handleSelectCompany.bind(this);
    this.handleSearchCompany = this.handleSearchCompany.bind(this);
    this.handleGetProductsByCompany =
      this.handleGetProductsByCompany.bind(this);
  }

  componentDidMount() {
    this.props.actions.getCompanies();
  }

  componentDidUpdate() {
    // console.log(this.state.selectedCompanies);
    this.handleGetProductsByCompany();
  }

  handleSearchCompany = (value) => {
    this.props.actions.getCompanies(value);
  };

  handleSelectCompany = (company) => {
    let temp = this.state.selectedCompanies;
    const found = temp.find((element) => element === company.slug);

    if (found) {
      temp = temp.filter((element) => element !== company.slug);
    } else {
      temp.push(company.slug);
    }
    this.setState({ selectedCompanies: temp });
  };

  handleGetProductsByCompany = () => {
    this.props.actions.getProductsByFilter(
      this.props.sortingType[0],
      this.props.sortingType[1],
      this.props.currentCategory,
      this.state.selectedCompanies
    );
  };

  render() {
    return (
      <StyledContainer>
        <StyledHeader style={{ color: "#697488" }}>Brands</StyledHeader>
        <StyledWrapper>
          <StyledForm>
            <StyledSearch
              placeholder="Search brand"
              onChange={(e) => this.handleSearchCompany(e.target.value)}
            />
            <StyledCheckboxList>
              {this.props.companies.map((company) => (
                <StyledInput key={company.slug}>
                  <StyledCheckbox
                    type="checkbox"
                    id={company.slug}
                    onClick={() => this.handleSelectCompany(company)}
                  />{" "}
                  <StyledLabel for={company.slug}>{company.name}</StyledLabel>
                </StyledInput>
              ))}
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
      getCompanies: bindActionCreators(companiesActions.getCompanies, dispatch),
      getProductsByFilter: bindActionCreators(
        productActions.getProductsByFilter,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BrandsContainer);

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
  display: flex;
  margin-bottom: 1em;
  margin-left: 3px;
  margin-top: 3px;
`;

const StyledLabel = styled.label`
  width: 8.8em;
  font: 0.88rem;
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
