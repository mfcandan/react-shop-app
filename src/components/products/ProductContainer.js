import React, { Component } from "react";
import styled from "styled-components";
import ProductsList from "./ProductsList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "mug",
    };
    this.handleProductCategorySelect =
      this.handleProductCategorySelect.bind(this);
  }

  componentDidMount() {
    this.props.actions.getProducts("mug");
  }

  handleProductCategorySelect = (category) => {
    if (category === "mug") {
      this.setState({ selectedCategory: "mug" });
    } else if (category === "shirt") {
      this.setState({ selectedCategory: "shirt" });
    } else {
      console.log("Category not defined");
    }
    this.props.actions.getProducts(category);
  };

  render() {
    return (
      <StyledContainer>
        <StyledHeader>Products</StyledHeader>
        <StyledSelectProductCategories>
          <StyledButton
            selected={this.state.selectedCategory === "mug"}
            onClick={() => this.handleProductCategorySelect("mug")}
          >
            mug
          </StyledButton>
          <StyledButton
            selected={this.state.selectedCategory === "shirt"}
            onClick={() => this.handleProductCategorySelect("shirt")}
          >
            shirt
          </StyledButton>
        </StyledSelectProductCategories>
        <ProductsList products={this.props.products} />
      </StyledContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

const StyledContainer = styled.div``;
const StyledHeader = styled.div`
  color: #6f6f6f;
  font-size: 1.25rem;
`;
const StyledSelectProductCategories = styled.div`
  margin-top: 1em;
`;
const StyledButton = styled.button`
  border: none;
  border-radius: 2px;
  background-color: ${(props) =>
    props.selected === true ? "#1EA4CE" : "#F2F0FD"};
  color: ${(props) => (props.selected === true ? "#F2F0FD" : "#1EA4CE")};
  font-size: 0.81rem;
  font-weight: 1.13rem;
  margin-right: 0.5em;
  padding: 0.375em 1em;
  text-align: center;
`;
