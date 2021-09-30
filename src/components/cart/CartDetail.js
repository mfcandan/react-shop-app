import React from "react";
import styled from "styled-components";
import CartDetailProduct from "./CartDetailProduct";

export default function CartDetail() {
  return (
    <StyledContainer>
      <CartDetailProduct />
      <StyledCardTotalWrapper>
        <StyledCardTotal>₺39,97</StyledCardTotal>
      </StyledCardTotalWrapper>
    </StyledContainer>
  );
}

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
