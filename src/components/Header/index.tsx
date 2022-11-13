import Icon from "../Icon";
import "./styles.scss";

const index = () => {
  return (
    <div className="header-container">
      <div className="header-service-links">
        <div className="header-service-links-gmail">
          <a href="/gmail">Gmail</a>
        </div>
        <div className="header-service-links-images">
          <a href="/images">Images</a>
        </div>
      </div>
      <div className="header-menu">
        <div className="header-menu-apps">
          <a href="/apps">
            <Icon icon="google-apps" size={24} color="rgba(0, 0, 0, 0.87)" />
          </a>
        </div>
        <div className="header-menu-account">
          <img src="https://lh3.googleusercontent.com/ogw/AOh-ky0E67gCJ2Qz9viIunetdEukYNsRx6PQ5hpsM5zEN0Q=s32-c-mo" />
        </div>
      </div>
    </div>
  );
};

export default index;
