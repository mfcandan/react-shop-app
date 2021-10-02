import React from "react";
import styled from "styled-components";

export default function Product({ product, addToCart }) {
  return (
    <StyledProductWrapper key={product.name}>
      <StyledImageWrapper>
        <StyledImage />
      </StyledImageWrapper>
      <StyledPriceLabel>
        <span>₺</span> {product.price}
      </StyledPriceLabel>
      <StyledNameLabel>{product.name}</StyledNameLabel>
      <StyledButton onClick={() => addToCart(product)}>Add</StyledButton>
    </StyledProductWrapper>
  );
}

const StyledProductWrapper = styled.div`
  width: 7.75em;
  margin-bottom: 1.25em;
  margin-left: 1em;
`;

const StyledImageWrapper = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 12px;
  background-color: #fefefe;
  height: 7.75em;
  width: 7.75em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.div`
  width: 5.75em;
  height: 5.75em;
  background-color: #c4c4c4;
`;

const StyledPriceLabel = styled.div`
  //HELVETİCA REGULAR
  @import url(//db.onlinewebfonts.com/c/a64ff11d2c24584c767f6257e880dc65?family=Helvetica);
  font-family: Helvetica;
  margin-top: 0.5em;
  font-size: 0.88rem;
  color: #1ea4ce;
  font-weight: 600;

  span {
    font-family: Helvetica;
    font-weight: 300;
    color: #1ea4ce;
  }
`;

const StyledNameLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  height: 2.5em;
`;

const StyledButton = styled.div`
  background-color: #1ea4ce;
  color: #ffffff;
  border: none;
  border-radius: 2px;
  min-width: 7.75em;
  min-height: 1.38em;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5625em;
  padding: 1px 0;
`;
