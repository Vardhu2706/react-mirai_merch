// Imports
import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
// Functional Component
const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <h1>Mirai Merch</h1>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      <Link className="option" to="/shop">
        LOGIN
      </Link>
    </div>
  </div>
);
// Export
export default Header;
