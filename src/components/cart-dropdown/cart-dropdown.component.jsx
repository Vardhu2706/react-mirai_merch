// Imports
import React from "react";
import CustomButton from "../custom-button-component/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
// Functional Component
const CartDropdown = ({ cartItems, history, dispatch }) =>
  cartItems.length ? (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  ) : (
    <div className="cart-dropdown empty-cart-dropdown">
      <div className="cart-items">
        <span className="empty-message">Your cart is empty</span>
      </div>
    </div>
  );
// mapStateToProps
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
// Export
export default withRouter(connect(mapStateToProps)(CartDropdown));
