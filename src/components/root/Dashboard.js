import React from 'react'
import CartDetail from '../cart/CartDetail';
import FiltersContainer from '../filterComponents/FiltersContainer';
import ProductContainer from '../products/ProductContainer';
import styled from 'styled-components'


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
    )
}

const StyledDashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 20.55% 42.22% 20.55%;
  grid-gap: 1.11%;
  justify-content: center;
  background-color: #fafafa;
  margin-top: 2rem;
`

const StyledLeftContainer = styled.div`
    background-color: red;
`

const StyledCenterContainer = styled.div`
    background-color: yellow;
`

const StyledRightContainer = styled.div`

`