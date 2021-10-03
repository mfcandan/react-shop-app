import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledContainer>
      <StyledYear>©2019 Market</StyledYear>
      <StyledDivider />
      <StyledPrivacy>Privacy Policy</StyledPrivacy>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  align-items: center;
  margin-bottom: 2.5em;
`;

const StyledYear = styled.div`
  color: #1ea4ce;
  font-size: 0.81rem;
`;

const StyledDivider = styled.div`
  background-color: #1ea4ce;
  height: 3px;
  width: 3px;
  border-radius: 5em;
`;

const StyledPrivacy = styled.div`
  color: #1ea4ce;
  font-size: 0.81rem;
`;
