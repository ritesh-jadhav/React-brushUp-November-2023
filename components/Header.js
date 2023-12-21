import { useState } from "react";
import { logoImage } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Header = () => {
  const [btnValue, setBtnValue] = useState("login");
  const onlineStatus = useOnline();
  console.log("You are online ",onlineStatus)
  return (
    <div className="header">
      <div className="logo">
        <img src={logoImage} alt="logo" className="logo-image" />
      </div>
      <div className="nav-link">
        <ul className="nav-link-list">
          <li>online: {onlineStatus ? "✅" : "🛑"}</li>
          <li className="nav-items">
            <Link to="/about">About us</Link>
          </li>
          <li className="nav-items">
            <Link to="/grocery">Groceries</Link>
          </li>
          <li className="nav-items">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-items">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnValue === "login"
                ? setBtnValue("logout")
                : setBtnValue("login");
            }}
          >
            {btnValue}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
