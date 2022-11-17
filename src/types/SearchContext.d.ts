import { Search } from "./Search";

export type SearchContextType = {
  searchs: Search[];
  googleSearch: (term: string | undefined) => void;
};
