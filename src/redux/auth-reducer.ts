import { captchaAcType, logoutACType, setUserAuthType } from "../types/types";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isLogin: false as boolean,
  captcha: null as string | null | {},
};
export type InitialStateType = typeof initialState;

// action type
type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V;

type ActionType =
  | Action<"SET_USER_AUTH", setUserAuthType>
  | Action<"LOGOUT", logoutACType>
  | Action<"CAPTCHA", captchaAcType>
  | Action<"CAPTCHA_DEFAULT", { value: null }>;

const userReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "SET_USER_AUTH":
      return {
        ...state,
        ...action.payload,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        ...action.payload,
      };
    case "CAPTCHA":
      return {
        ...state,
        captcha: action.payload,
      };
    case "CAPTCHA_DEFAULT":
      return {
        ...state,
        captcha: null,
      };

    default:
      return state;
  }
};

export default userReducer;
