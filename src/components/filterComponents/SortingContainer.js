import React from "react";
import styled from "styled-components";

export default function SortingContainer() {
  return (
    <StyledContainer>
      <StyledHeader style={{ color: "#697488" }}>Sorting</StyledHeader>
      <StyledWrapper>
        <StyledForm>
          <StyledInput>
            <StyledInputRadio
              type="radio"
              id="phtl"
              name="sorting"
              value="phtl"
            />
            <StyledLabel for="phtl">Price low to high</StyledLabel>
          </StyledInput>

          <StyledInput>
            <StyledInputRadio
              type="radio"
              id="plth"
              name="sorting"
              value="plth"
            />
            <StyledLabel for="plth">Price high to low</StyledLabel>
          </StyledInput>

          <StyledInput>
            <StyledInputRadio
              type="radio"
              id="nto"
              name="sorting"
              value="nto"
            />
            <StyledLabel for="nto">New to old</StyledLabel>
          </StyledInput>
          <StyledInput>
            <StyledInputRadio
              type="radio"
              id="otn"
              name="sorting"
              value="otn"
            />
            <StyledLabel for="otn">Old to new</StyledLabel>
          </StyledInput>
        </StyledForm>
      </StyledWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin-bottom: 1.5em;
`;

const StyledWrapper = styled.div`
  background-color: #fff;
  border-radius: 2px;
  width: 18.5rem;
  height: 11.5rem;
  padding-top: 0.75rem;
  display: flex;
  align-items: center;
`;

const StyledHeader = styled.p`
  font-size: 0.81rem;
  font-weight: 600;
  margin-bottom: 0.75em;
`;

const StyledForm = styled.form``;

const StyledInput = styled.label`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
`;

const StyledInputRadio = styled.input`
  width: 1.38rem;
  height: 1.38rem;
`;

const StyledLabel = styled.label`
  font-size: 0.88em;
  margin-left: 0.75rem;
`;
