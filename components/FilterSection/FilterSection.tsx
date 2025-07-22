import React from "react";
import Category from "./Category/Category";
import Type from "./Type/Type";
import Glass from "./Glass/Glass";

const FilterSection = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-wide">Filter cocktails</h1>
      <div className="space-y-5 mt-5">
        <Category />
        <Type />
        <Glass />
      </div>
    </div>
  );
};

export default FilterSection;
