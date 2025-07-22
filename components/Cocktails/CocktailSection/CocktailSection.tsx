import React from "react";
import CocktailCards from "../CocktailCards/CocktailCards";

const CocktailSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5">
      <CocktailCards />
    </div>
  );
};

export default CocktailSection;
