import { useQuery } from "@tanstack/react-query";
import {
  fetchAllCocktails,
  fetchCocktailCategory,
  fetchCocktailGlass,
  fetchCocktailType,
} from "./api-services";

export const useFetchCocktailData = () => {
  return useQuery<CocktailData[]>({
    queryKey: ["cocktailData"],
    queryFn: fetchAllCocktails,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useFetchCocktailCategory = () => {
  return useQuery<CocktailResponse>({
    queryKey: ["cocktail-category"],
    queryFn: fetchCocktailCategory,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
};

export const useFetchCocktailType = () => {
  return useQuery<CocktailResponse>({
    queryKey: ["cocktail-type"],
    queryFn: fetchCocktailType,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
};

export const useFetchCocktailGlass = () => {
  return useQuery<CocktailResponse>({
    queryKey: ["cocktail-glass"],
    queryFn: fetchCocktailGlass,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
};
