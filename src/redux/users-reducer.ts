import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_COUNT,
  IS_LOADING,
  FOLLOW_IN_PROGRES,
} from "../constants/index";
import { changeObjInArray } from "../assets/helpers";
import { UserType } from "../types/types";
type initialStateType = {
  users: Array<UserType>;
  totalCount: number;
  countByPage: number;
  currentPage: number;
  isLoading: boolean;
  followInProgres: Array<number>;
};
let initialState = {
  users: [] as Array<UserType>,
  totalCount: 0 as number,
  countByPage: 10 as number,
  currentPage: 1 as number,
  isLoading: true as boolean,
  followInProgres: [] as Array<number>,
};
export type initialStateUsersType = typeof initialState;

// action type
type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V;

type ActionType =
  | Action<"FOLLOW", { payload: number }>
  | Action<"FOLLOW_IN_PROGRES", { following: number; userId: number }>
  | Action<"UNFOLLOW", { payload: number }>
  | Action<"SET_USERS", { payload: Array<UserType> }>
  | Action<"SET_CURRENT_PAGE", { payload: number }>
  | Action<"IS_LOADING", { payload: boolean }>
  | Action<"SET_TOTAL_COUNT", { payload: number }>;

const userReducer = (
  state = initialState,
  action: ActionType
): initialStateUsersType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: changeObjInArray(state.users, "id", action.payload, {
          followed: true,
        }),
      };
    case "FOLLOW_IN_PROGRES":
      return {
        ...state,
        followInProgres: action.following
          ? [...state.followInProgres, action.userId]
          : state.followInProgres.filter((id) => id != action.userId),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: changeObjInArray(state.users, "id", action.payload, {
          followed: false,
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.payload],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
