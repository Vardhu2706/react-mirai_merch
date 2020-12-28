// Imports
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
// Export
export default combineReducers({
  user: userReducer,
});
