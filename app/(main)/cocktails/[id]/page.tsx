import CocktailDetails from "@/components/Cocktails/CocktailDetails/CocktailDetails";
import React from "react";

const CocktailDetailsPage = async ({ params }: { params: { id: string } }) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const { id } = params;

  return (
    <div className="app-width px-5 py-10 lg:py-20 lg:px-0">
      <CocktailDetails cocktailId={id} />
    </div>
  );
};

export default CocktailDetailsPage;
