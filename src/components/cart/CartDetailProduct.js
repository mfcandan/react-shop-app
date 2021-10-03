import React from "react";
import styled from "styled-components";
import minusImg from "../../assets/minus.png";
import plusImg from "../../assets/plus.png";

export default function CartDetailProduct({
  carts,
  IncreaseQuantity,
  DecreaseCartQuantity,
}) {
  const emptyCart = (
    <>
      <StyledContainer>
        <StyledWrapper>
          <StyledLabel>Your Cart is Empty.</StyledLabel>
        </StyledWrapper>
      </StyledContainer>
      <SytledDivider />
    </>
  );

  const cartView = (
    <>
      {carts.map((cartItem) => (
        <>
          <StyledContainer>
            <StyledWrapper>
              <StyledLabel>{cartItem.product.name}</StyledLabel>
              <StyledLabel style={{ color: "#1EA4CE" }}>
                ₺{cartItem.product.price}
              </StyledLabel>
            </StyledWrapper>
            <StyledCountWrapper>
              <StyledImageWrapper
                onClick={() => DecreaseCartQuantity(cartItem)}
              >
                <img src={minusImg} alt="minus" />
              </StyledImageWrapper>
              <StyledCount>{cartItem.quantity}</StyledCount>
              <StyledImageWrapper onClick={() => IncreaseQuantity(cartItem)}>
                <img src={plusImg} alt="plus" />
              </StyledImageWrapper>
            </StyledCountWrapper>
          </StyledContainer>
          <SytledDivider />
        </>
      ))}
    </>
  );

  return (
    <>
      {console.log(carts)}
      {carts.length !== 0 ? cartView : emptyCart}
    </>
  );
}

const StyledContainer = styled.div`
  margin: 1.66rem 1.68rem 1.14rem 1.37rem;
  display: flex;
  justify-content: space-between;
  align-self: center;
`;
const StyledWrapper = styled.div``;
const StyledLabel = styled.div`
  font-size: 0.88em;
  padding-right: 0.5em;
`;
const StyledCountWrapper = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
`;
const StyledImageWrapper = styled.div`
  min-height: 2.06rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StyledCount = styled.div`
  height: 2.06rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1ea4ce;
  color: white;
  margin-left: 0.68rem;
  margin-right: 0.68rem;
`;
const SytledDivider = styled.div`
  background-color: #f4f4f4;
  height: 0.06rem;
  margin-left: 1rem;
  margin-right: 1rem;
  align-self: center;
`;
