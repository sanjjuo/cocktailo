import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchAllCocktails = async (): Promise<CocktailData[]> => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const promises = [...letters].map((letter) =>
    axios.get(`${BASE_URL}/search.php?f=${letter}`)
  );

  const responses = await Promise.all(promises);

  const allDrinks = responses.flatMap((res) => res.data.drinks || []);
  return allDrinks.filter(Boolean); // returns CocktailData[]
};

export const fetchCocktailCategory = async (): Promise<CocktailResponse> => {
  const response = await axios.get(`${BASE_URL}/list.php?c=list`);
  return response.data;
};

export const fetchCocktailType = async (): Promise<CocktailResponse> => {
  const response = await axios.get(`${BASE_URL}/list.php?a=list`);
  return response.data;
};

export const fetchCocktailGlass = async (): Promise<CocktailResponse> => {
  const response = await axios.get(`${BASE_URL}/list.php?g=list`);
  return response.data;
};

// export const filterCocktailsByCategory = async (category: any) => {
//   const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
//   return response.data;
// };
