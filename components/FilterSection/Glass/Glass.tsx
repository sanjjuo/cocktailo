"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useFetchCocktailGlass } from "@/services/react-query-services";

const Glass = () => {
  const { data } = useFetchCocktailGlass();
  return (
    <div>
      <h2 className="uppercase mb-3 font-bold tracking-wide text-app-primary">
        Type
      </h2>
      <ul className="space-y-3">
        {data?.drinks.slice(0, 5).map((glass, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-lg font-bold capitalize"
          >
            <Checkbox className="border-white rounded-none w-4 h-4" />
            {glass?.strGlass}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Glass;
