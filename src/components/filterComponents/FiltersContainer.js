import React from "react";
import SortingContainer from "./SortingContainer";
import BrandsContainer from "./BrandsContainer";
import TagsContainer from "./TagsContainer";
import styled from "styled-components";


export default function FiltersContainer() {
  return (
    <>
      <SortingContainer />
      <BrandsContainer />
      <TagsContainer />
    </>
  );
}

const StyledFiltersContainer = styled.div``;
