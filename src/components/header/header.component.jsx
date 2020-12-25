// Imports
import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
// Functional Component
const Header = ({ currentUser }) => (
  // TO-DO : Add Search Box
  // Add Search Feature
  <div className="header">
    <Link className="logo-container" to="/">
      <h1>Mirai Merch</h1>
    </Link>
    {/* <div className='search-box'>
      <input />
    </div> */}
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/login">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
// Export
export default Header;
