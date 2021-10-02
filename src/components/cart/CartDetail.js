import React, { Component } from "react";
import styled from "styled-components";
import CartDetailProduct from "./CartDetailProduct";
import * as cartActions from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class CartDetail extends Component {
  constructor(props) {
    super(props);
    this.IncreaseCartQuantity = this.IncreaseCartQuantity.bind(this);
  }

  IncreaseCartQuantity = (cartItem) => {
    this.props.actions.increaseCartItem(cartItem);
  };

  DecreaseCartQuantity = (cartItem) => {
    this.props.actions.decreaseCartItem(cartItem);
  };

  render() {
    let totalPrice = 0;
    this.props.cart.map(
      (cartItem) => (totalPrice += cartItem.quantity * cartItem.product.price)
    );
    return (
      <StyledContainer>
        <CartDetailProduct
          carts={this.props.cart}
          IncreaseQuantity={this.IncreaseCartQuantity}
          DecreaseCartQuantity={this.DecreaseCartQuantity}
        />
        <StyledCardTotalWrapper>
          <StyledCardTotal
            onClick={() => this.IncreaseCartQuantity(this.props.cart)}
          >
            ₺ {totalPrice.toFixed(2)}
          </StyledCardTotal>
        </StyledCardTotalWrapper>
      </StyledContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
      increaseCartItem: bindActionCreators(
        cartActions.IncreaseQuantity,
        dispatch
      ),
      decreaseCartItem: bindActionCreators(
        cartActions.DecreaseQuantity,
        dispatch
      ),
    },
  };
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);

const StyledContainer = styled.div`
  background-color: #fff;
  border: 0.5rem solid #1ea4ce;
  border-radius: 2px;
`;

const StyledCardTotalWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledCardTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.02rem 1rem 1.02rem 0;
  width: 5.75rem;
  height: 3.19rem;
  border: 2px solid #1ea4ce;
  border-radius: 2px;
  color: #1ea4ce;
  font-size: 0.88em;
  font-weight: 600;
`;
