import { logoImage } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logoImage} alt="logo" className="logo-image" />
      </div>
      <div className="nav-link">
        <ul className="nav-link-list">
          <li className="nav-items">Restaurant</li>
          <li className="nav-items">Explore tradition</li>
          <li className="nav-items">offer</li>
          <li className="nav-items">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
