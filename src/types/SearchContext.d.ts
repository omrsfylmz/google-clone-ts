import { Search } from "./Search";

export type SearchContextType = {
  searchs: Search[];
  searchValue: string;
  setSearchValue: (value: string) => void;
  googleSearch: (term: string | undefined) => void;
};
