import React from "react";
import SortingContainer from "./SortingContainer";
import BrandsContainer from "./BrandsContainer";
import TagsContainer from "./TagsContainer";

export default function FiltersContainer() {
  return (
    <>
      <SortingContainer />
      <BrandsContainer />
      <TagsContainer />
    </>
  );
}
