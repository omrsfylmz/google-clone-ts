import React from "react";
import { SearchContext } from "../../context/searchContext";
import { SearchContextType } from "../../types/SearchContext";
import "./styles.scss";

type ButtonProps = {
  name: string;
  term?: string;
};

const index = ({ name, term }: ButtonProps) => {
  const { searchs, googleSearch } = React.useContext(
    SearchContext
  ) as SearchContextType;

  return (
    <button className="button" onClick={() => googleSearch(term)}>
      {name}
    </button>
  );
};

export default index;
