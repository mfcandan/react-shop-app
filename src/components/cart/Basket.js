import React, { Component } from "react";
import styled from "styled-components";
import basketImg from "../../assets/basket.png";
import { connect } from "react-redux";

class Basket extends Component {
  render() {
    let totalPrice = 0;
    this.props.cart.map(
      (cartItem) => (totalPrice += cartItem.quantity * cartItem.product.price)
    );
    return (
      <StyledCartTotalContainer>
        <StyledBasketImage src={basketImg} />
        <StyledCartTotalText>₺ {totalPrice.toFixed(2)}</StyledCartTotalText>
      </StyledCartTotalContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps)(Basket);

const StyledCartTotalContainer = styled.div`
  background-color: #147594;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;
`;
const StyledBasketImage = styled.img``;
const StyledCartTotalText = styled.div`
  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
`;
