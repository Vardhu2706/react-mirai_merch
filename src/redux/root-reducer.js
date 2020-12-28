// Imports
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
// Export
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
