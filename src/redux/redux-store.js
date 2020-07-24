import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";
import { createLogger } from "redux-logger";

const composeEnhancers = composeWithDevTools({
  name: `Redux`,
  realtime: true,
  trace: true,
  traceLimit: 25,
});

const logger = createLogger()


let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: userReducer,
  auth: authReducer,
  initApp: appReducer,
  form: formReducer,
});

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;
