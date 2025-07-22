"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useFetchCocktailType } from "@/services/react-query-services";

const Type = () => {
  const { data } = useFetchCocktailType();
  return (
    <div>
      <h2 className="uppercase mb-3 font-bold tracking-wide text-app-primary">
        Type
      </h2>
      <ul className="space-y-3">
        {data?.drinks.map((type, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-lg font-bold capitalize"
          >
            <Checkbox className="border-white rounded-none w-4 h-4" />
            {type.strAlcoholic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Type;
