// Imports
import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
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
const mapStateToProps = (state) => ({
  currentUser : state.user.currentUser
})
// Export 
export default connect(mapStateToProps)(Header);
/* 
  The connect() function connects a React component to a Redux Store.
  - It provides its connected component with pieces of the data it needs from the store, and the functions
    it can use to dispatch actions to the store.
  - It does not modify the component class passed to it, instead it returns a new, connected component
    class that wraps the component you passed in.
*/