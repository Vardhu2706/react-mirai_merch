// Initial state
const INITIAL_STATE = {
  currentUser: null,
};
// Handling action
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
// Export
export default userReducer;
