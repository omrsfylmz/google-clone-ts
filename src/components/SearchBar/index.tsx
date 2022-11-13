import Icon from "../Icon";
import "./styles.scss";

const index = () => {
  return (
    <form className="search-bar-container">
      <div className="search-icon">
        <Icon icon="search" size={20} color="#9aa0a6" />
      </div>
      <input type="text" />
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
