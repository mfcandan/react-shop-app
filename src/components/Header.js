import React from 'react'
import styled from 'styled-components'
import logoImg from '../assets/logo.png'
import Basket from './cart/Basket'

export default function Header() {
  return (
    <StyledHeaderContainer>
      <StyledBasket />
      <StyledLogo src={logoImg} />
      <StyledBasket>
        <Basket />
      </StyledBasket>
    </StyledHeaderContainer>
  )
}

const StyledHeaderContainer = styled.div`
  background-color: #1EA4CE;
  display: flex;
  align-items: center;
`
const StyledLogo = styled.img`
  height: auto;
  width: auto;
`
const StyledBasket = styled.div`
    margin-left: auto;
    margin-right: 7.23%;
    width: 8.95%;
`

