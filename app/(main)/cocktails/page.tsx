import CocktailSection from "@/components/Cocktails/CocktailSection/CocktailSection";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import FilterSection from "@/components/FilterSection/FilterSection";

const CocktailsListPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay for loading state
  return (
    <div className="app-width px-5 py-10 lg:py-20 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 h-[80vh]">
        <div className="col-span-1 overflow-y-auto">
          <FilterSection />
        </div>
        <div className="col-span-4 overflow-y-auto scrollbar-thin scrollbar-thumb-app-primary scrollbar-track-black px-2">
          <SearchBar />
          <CocktailSection />
        </div>
      </div>
    </div>
  );
};

export default CocktailsListPage;
