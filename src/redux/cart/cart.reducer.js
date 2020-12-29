// Imports
import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";
// Initial State
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};
// Reducer
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
