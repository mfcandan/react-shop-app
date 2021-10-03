import React from "react";
import CartDetail from "../cart/CartDetail";
import FiltersContainer from "../filterComponents/FiltersContainer";
import ProductContainer from "../products/ProductContainer";
import styled from "styled-components";

export default function Dashboard() {
  return (
    <StyledDashboardWrapper>
      <StyledLeftContainer>
        <FiltersContainer />
      </StyledLeftContainer>
      <StyledCenterContainer>
        <ProductContainer />
      </StyledCenterContainer>
      <StyledRightContainer>
        <CartDetail />
      </StyledRightContainer>
    </StyledDashboardWrapper>
  );
}

const StyledDashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 20.55% 42.22% 20.55%;
  grid-gap: 1em;
  justify-content: center;
  background-color: #fafafa;
  padding-top: 2.36em;
  margin-bottom: 8.5em;
`;

const StyledLeftContainer = styled.div``;

const StyledCenterContainer = styled.div``;

const StyledRightContainer = styled.div``;
