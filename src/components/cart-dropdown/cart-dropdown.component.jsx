// Imports
import React from "react";
import CustomButton from "../custom-button-component/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
// Functional Component
const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Checkout</CustomButton>
  </div>
);
// mapStateToProps
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
// Export
export default connect(mapStateToProps, null)(CartDropdown);
