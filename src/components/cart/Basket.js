import React from 'react'
import styled from 'styled-components'
import basketImg from '../../assets/basket.png'

export default function Basket() {
  return (
    <StyledCartTotalContainer>
      <StyledBasketImage src={basketImg} />
      <StyledCartTotalText>₺ 39,97</StyledCartTotalText>
    </StyledCartTotalContainer>
  )
}

const StyledCartTotalContainer = styled.div`
  background-color: #147594;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem;

`
const StyledBasketImage = styled.img`

`
const StyledCartTotalText = styled.div`
  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
`