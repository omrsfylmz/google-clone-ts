import Button from "../../components/Button";
import Header from "../../components/Header";
import Search from "../../components/SearchBar";
import googleLogo from "../../assets/google-logo.png";
import "./styles.scss";

const index = () => {
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
            <Button />
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
