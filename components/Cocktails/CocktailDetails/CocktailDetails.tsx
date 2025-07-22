"use client";
import { useFetchCocktailData } from "@/services/react-query-services";
import Image from "next/image";
import React from "react";

const CocktailDetails = ({ cocktailId }: { cocktailId: string }) => {
  const { data } = useFetchCocktailData();
  const cocktailDetails = data?.find((item) => item.idDrink === cocktailId);
  console.log(cocktailDetails);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="col-span-1">
        <Image
          src={cocktailDetails?.strDrinkThumb || "/classic.png"}
          width={1000}
          height={500}
          alt="product-details-img"
          className="rounded-xl"
        />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default CocktailDetails;
