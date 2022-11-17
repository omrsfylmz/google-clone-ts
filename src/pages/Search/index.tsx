import Button from "../../components/Button";
import Header from "../../components/Header";
import Search from "../../components/SearchBar";
import { SearchContext } from "../../context/searchContext";
import { SearchContextType } from "../../types/SearchContext";
import { Search as SearchType } from "../../types/Search";
import googleLogo from "../../assets/google-logo.png";
import "./styles.scss";
import React from "react";

const index = () => {
  // const { searchs, googleSearch } = React.useContext(
  //   SearchContext
  // ) as SearchContextType;
  const [term, setTerm] = React.useState<string>("");

  return (
    <div className="search-page-container">
      <div className="search-page-header">
        <Header />
      </div>
      <div className="search-page">
        <img src={googleLogo} alt="google-logo" className="google-logo" />
        <div className="search-page-inner">
          <Search />
          <div className="search-page-button-container">
            {/* <button onClick={() => googleSearch("car")}> asdasdas</button> */}
            <Button name="Google Search" term={term} />
            <Button name="I'm Feeling Lucky" />
            {/* <Button /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
