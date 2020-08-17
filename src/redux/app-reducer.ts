import { ActionTypes } from "../ac/usersPage";

let initialStateType = {
  isInitialized: null as boolean | null,
  fakeData: 0,
};
export type InitialStateType = typeof initialStateType;

// type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V
 
// type ActionType =
//   | Action<"SN/APP/INIT_SUCCESS", { value: boolean }>
//   | Action<"FAKE", { value: number }>;

  let initialState: InitialStateType = {
  isInitialized: false,
  fakeData: 0,
};

const appReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    
    case "SN/APP/INIT_SUCCESS":
      
      return {
        ...state,
        isInitialized: true,

      };
    case "FAKE":
      return {
        ...state,
        fakeData: state.fakeData + 1,
      };

    default:
      return state;
  }
};

export default appReducer;
