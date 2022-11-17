import * as React from "react";
import { SearchContextType } from "../types/SearchContext";
import { Search } from "../types/Search";

export const SearchContext = React.createContext<SearchContextType | null>(
  null
);

interface SearchContextProp {
  children?: React.ReactNode;
}
const SearchProvider: React.FC<SearchContextProp> = ({ children }) => {
  const [searchs, setSearchs] = React.useState<Search[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const googleSearch = async (term: string = searchValue) => {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${
        import.meta.env.VITE_API_KEY
      }&cx=${import.meta.env.VITE_CONTEXT_KEY}&q=${term}`
    );
    const data = await response.json();
    setSearchs(data.items);
  };
  return (
    <SearchContext.Provider
      value={{ searchs, googleSearch, searchValue, setSearchValue }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
