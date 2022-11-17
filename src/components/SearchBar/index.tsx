import React from "react";
import { SearchContext } from "../../context/searchContext";
import { SearchContextType } from "../../types/SearchContext";
import Icon from "../Icon";
import "./styles.scss";

const index = () => {
  const { searchValue, setSearchValue } = React.useContext(
    SearchContext
  ) as SearchContextType;
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  return (
    <form className="search-bar-container">
      <div className="search-icon">
        <Icon icon="search" size={20} color="#9aa0a6" />
      </div>
      <input type="text" onChange={handleInput} value={searchValue} />
      <div className="search-bar-clear-icon">
        <Icon icon="clear" size={20} color="#70757a" />
      </div>
      <div className="search-bar-right-icons">
        <Icon icon="search-by-voice" size={24} />
        <Icon icon="search-by-image" size={24} />
      </div>
    </form>
  );
};

export default index;
