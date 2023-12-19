import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnName, setbtnName] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="no-logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>about us</li>
          <li>contact us</li>
          <li>cart</li>
          <button
            className="login"
            onClick={() => {
              setbtnName(btnName === "login" ? "logout" : "login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
