import "./styles.scss";
import Header from "../../components/Header";
import googleLogo from "../../assets/google-logo.png";
import SearchBar from "../../components/SearchBar";
import Categories from "../../components/Categories";
import SearchResult from "../../components/SearchResult";

const index = () => {
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
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </div>
    </div>
  );
};

export default index;
