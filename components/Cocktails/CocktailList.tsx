import React from "react";

const CocktailList = ({ cocktails }: { cocktails: Cocktail[] }) => {
  return (
    <>
      {cocktails.map((item) => (
        <div key={item.id} className="flex items-start justify-between gap-10">
          <div className="space-y-1">
            <h1 className="text-app-secondary text-xl md:text-3xl font-bold">
              {item.name}
            </h1>
            <p>
              {item?.origin} | {item.volume} L
            </p>
          </div>
          <span className="text-xl md:text-3xl font-bold">${item.price}</span>
        </div>
      ))}
    </>
  );
};

export default CocktailList;
