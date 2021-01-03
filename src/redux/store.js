/* 
    The Redux Store brings together the state, actions and reducers that make up the app.
    The Store has several responsibilities:
    1. Holds the current application state inside.
    2. Allows access to the current state via 'store.getState();'
    3. Allows state to be updated via 'store.dispatch(action);'
    4. Registers listener callbacks via 'store.subscribe(listener);'
    5. Handles unregistering of listeners via the 'unsubscribe' function returned by
       'store.subscribe(listener)'.
    - It is important to note that you'll only have a single store in a Redux app. When
      you want to split your data handling logic, you'll use reducer composition and 
      create multiple reducers that can be combined together, instead of creating separate stores.
*/
// Imports
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
//
const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
