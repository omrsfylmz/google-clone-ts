import React from "react";
import { SearchContext } from "../../context/searchContext";
import { SearchContextType } from "../../types/SearchContext";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

type ButtonProps = {
  name: string;
  term?: string;
};

const index = ({ name, term }: ButtonProps) => {
  const navigate = useNavigate();
  const { searchValue } = React.useContext(SearchContext) as SearchContextType;

  function handleClick() {
    googleSearch(searchValue);
    navigate("/home");
  }

  const { searchs, googleSearch } = React.useContext(
    SearchContext
  ) as SearchContextType;

  return (
    <button className="button" onClick={handleClick}>
      {name}
    </button>
  );
};

export default index;
