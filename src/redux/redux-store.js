import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import userReducer from "./users-reducer";
import fileChangerReducer from "../common/FileChangerFeature/ducks";

const composeEnhancers = composeWithDevTools({
  name: `Redux`,
  realtime: true,
  trace: true,
  traceLimit: 25,
});

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: userReducer,
  auth: authReducer,
  initApp: appReducer,
  userPhoto: fileChangerReducer, 
  form: formReducer,
});

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;
