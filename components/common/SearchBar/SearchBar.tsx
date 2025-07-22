import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex flex-col items-start gap-2">
      <h1 className="font-bold text-2xl tracking-wide">Cocktails list</h1>
      <div className="flex items-center gap-5 bg-white/30 px-5 py-2 rounded-md w-96 h-12">
        <Input
          type="search"
          placeholder="Search cocktail"
          className="border-none shadow-none focus:!ring-0 placeholder:text-white placeholder:text-lg !text-lg w-full h-full p-0"
        />
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
