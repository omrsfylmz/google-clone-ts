import "./styles.scss";
import { Search } from "../../types/Search";

type SearchResultProps = {
  search: Search;
};

const index = (props: SearchResultProps) => {
  return (
    <div className="search-result-container">
      <div className="search-result-container-header-features">
        <div className="display-link">
          <a href={props.search.link}>{props.search.displayLink}</a>
        </div>
        <a href={props.search.link}>
          <div className="title">{props.search.title}</div>
        </a>
      </div>
      <div className="description">{props.search.snippet}</div>
      <div className="thumbnail">
        {props.search.pageMap?.cse_image?.length > 0 && (
          <img src={props.search.pageMap?.cse_image[0].src} />
        )}
      </div>
    </div>
  );
};

export default index;
