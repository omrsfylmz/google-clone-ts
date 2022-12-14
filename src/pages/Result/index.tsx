import "./styles.scss";
import Header from "../../components/Header";
import googleLogo from "../../assets/google-logo.png";
import SearchBar from "../../components/SearchBar";
import Categories from "../../components/Categories";
import SearchResult from "../../components/SearchResult";
import React from "react";
import { SearchContext } from "../../context/searchContext";
import { SearchContextType } from "../../types/SearchContext";

const index = () => {
  const { searchs } = React.useContext(SearchContext) as SearchContextType;

  return (
    <div className="result-page-container">
      <div className="result-page-header">
        <div className="result-page-logo-container">
          <img src={googleLogo} className="result-page-logo-inner" />
        </div>
        <div className="result-page-search-bar">
          <SearchBar />
        </div>
        <Header />
      </div>
      <div className="result-page-categories">
        <Categories />
      </div>
      <div className="result-page-result-cell">
        {searchs?.map((search, index) => {
          return <SearchResult key={index} search={search} />;
        })}
      </div>
    </div>
  );
};

export default index;
