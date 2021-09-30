import React from "react";
import styled from "styled-components";
import minusImg from "../../assets/minus.png";
import plusImg from "../../assets/plus.png";

export default function CartDetailProduct() {
  return (
    <>
      <StyledContainer>
        <StyledWrapper>
          <StyledLabel>Example Product</StyledLabel>
          <StyledLabel style={{ color: "#1EA4CE" }}>₺14,99</StyledLabel>
        </StyledWrapper>
        <StyledCountWrapper>
          <img src={minusImg} alt="minus" onClick={() => alert("minus")} />
          <StyledCount>1</StyledCount>
          <img src={plusImg} alt="plus" />
        </StyledCountWrapper>
      </StyledContainer>
      <SytledDivider />
      <StyledContainer>
        <StyledWrapper>
          <StyledLabel>Example Product</StyledLabel>
          <StyledLabel style={{ color: "#1EA4CE" }}>₺14,99</StyledLabel>
        </StyledWrapper>
        <StyledCountWrapper>
          <img src={minusImg} alt="minus" onClick={() => alert("minus")} />
          <StyledCount>1</StyledCount>
          <img src={plusImg} alt="plus" />
        </StyledCountWrapper>
      </StyledContainer>
      <SytledDivider />
      <StyledContainer>
        <StyledWrapper>
          <StyledLabel>Example Product</StyledLabel>
          <StyledLabel style={{ color: "#1EA4CE" }}>₺14,99</StyledLabel>
        </StyledWrapper>
        <StyledCountWrapper>
          <img src={minusImg} alt="minus" onClick={() => alert("minus")} />
          <StyledCount>1</StyledCount>
          <img src={plusImg} alt="plus" />
        </StyledCountWrapper>
      </StyledContainer>
      <SytledDivider />
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
`;

const StyledCountWrapper = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
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
