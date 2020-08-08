import {
  SET_USER_AUTH,
  LOGOUT,
  CAPTCHA,
  UPDATE_NEW_MESSAGE_TEXT_PROCESSING,
  SEND_MESSAGE,
} from "../constants";

export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};
export type sendMessageCreatorType = {
  type: typeof SEND_MESSAGE;
  payload: string;
};

export type Profile = {
  aboutMe: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};

export type PhotosType = {
  small: string | null;
  large: string | null;
};
export type UserType = {
  name: string;
  id: number;
  photos: PhotosType;
  status: string | null;
  followed: boolean;
};

export type setUserAuthType = {
  type: typeof SET_USER_AUTH;
  payload: { userId: number; email: string; login: string };
};

export type logoutACType = {
  type: typeof LOGOUT;
  payload: followPayloadType;
};
type followPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isLogin: boolean;
};

// captcha type
export type captchaType = {
  captcha: { url: string };
};
export type captchaAcType = {
  type: typeof CAPTCHA;
  payload: captchaType;
};

// post type
export type PostType = {
  id: number;
  message: string;
  likesCount: number | null;
};

export type updateMessageTextCreator_ProcessType = {
  type: typeof UPDATE_NEW_MESSAGE_TEXT_PROCESSING;
  payload: string;
};
