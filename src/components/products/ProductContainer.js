import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductsList from "./ProductsList";

const selected = {
  clr: "palevioletred",
  bg: "white",
};

const selectedBtn = ({ fg, bg }) => ({
  clr: bg,
  bg: fg,
});

export default function ProductContainer() {
  const [productCategory, setProductCategory] = useState([true, false]);

  useEffect(() => {
    console.log(productCategory);
  }, [productCategory]);

  const handleProductCategorySelect = (selectedCategory) => {
    selectedCategory === "mug"
      ? setProductCategory([true, false])
      : setProductCategory([false, true]);
  };

  return (
    <StyledContainer>
      <StyledHeader>Products</StyledHeader>
      <StyledSelectProductCategories>
        <StyledButton
          selected={productCategory[0]}
          onClick={(e) => handleProductCategorySelect("mug")}
        >
          mug
        </StyledButton>
        <StyledButton
          selected={productCategory[1]}
          onClick={(e) => handleProductCategorySelect("shirt")}
        >
          shirt
        </StyledButton>
      </StyledSelectProductCategories>
      <ProductsList />
    </StyledContainer>
  );
}

const StyledContainer = styled.div``;

const StyledHeader = styled.div`
  color: #6f6f6f;
  font-size: 1.25rem;
`;

const StyledSelectProductCategories = styled.div`
  margin-top: 1em;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 2px;
  background-color: ${(props) =>
    props.selected === true ? "#1EA4CE" : "#F2F0FD"};
  color: ${(props) => (props.selected === true ? "#F2F0FD" : "#1EA4CE")};
  font-size: 0.81rem;
  font-weight: 1.13rem;
  margin-right: 0.5em;
  padding: 0.375em 1em;
  text-align: center;
`;
