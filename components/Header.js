import { useState } from "react";
import { logoImage } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [btnValue, setBtnValue] = useState("login");
  const onlineStatus = useOnline();
  console.log("You are online ", onlineStatus);
  return (
    <div className="flex bg-pink-300 justify-between shadow-xl m-2">
      <div className="logo">
        <img className="w-48" src={logoImage} alt="logo" />
      </div>
      <div className="p-4 m-4 flex">
        <ul className="items-center flex">
          <li className="px-4">online: {onlineStatus ? "✅" : "🛑"}</li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Groceries</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">Cart</li>
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
