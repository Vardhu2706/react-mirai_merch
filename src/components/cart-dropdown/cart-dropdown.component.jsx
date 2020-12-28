// Imports
import React from "react";
import CustomButton from "../custom-button-component/custom-button.component";
import "./cart-dropdown.styles.scss";
// Functional Component
const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>Checkout</CustomButton>
  </div>
);
// Export
export default CartDropdown;
