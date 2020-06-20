import {
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_CURRENT_PAGE,
  SET_TOTAL_COUNT,
  IS_LOADING,
  FOLLOW_IN_PROGRES,
} from "./../constants/index";
let initialState = {
  users: [],
  totalCount: 0,
  countByPage: 10,
  currentPage: 1,
  isLoading: true,
  followInProgres: [2,3],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload && user.followed === false) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case FOLLOW_IN_PROGRES:
      return {
        ...state,
        followInProgres: action.following
          ? [...state.followInProgres, action.userId]
          : state.followInProgres.filter((id) => id !== action.userId),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload && user.followed === true) {
            return { ...user, followed: false };
          }
          return user;
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
