import React from "react";
import styled from "styled-components";
import Product from "./Product";

export default function ProductsList() {
  return (
    <StyledContainer>
      <StyledProductListWrapper>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </StyledProductListWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-color: #ffffff;
  border-radius: 2px;
  margin-top: 1em;
  display: flex;
  justify-content: center;
`;

const StyledProductListWrapper = styled.div`
  margin: 1.25em 1.25em 1.25em 0.25em;
  max-width: 38em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
