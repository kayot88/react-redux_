import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducer from "./users-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const composeEnhancers = composeWithDevTools({
  name: `Redux`,
  realtime: true,
  trace: true,
  traceLimit: 25,
});

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: userReducer
});

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;
