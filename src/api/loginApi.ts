import { instance, ResultCodes } from "./api";

type postLoginFormDataPtropsType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type LoginResponseDataType = {
  userId: number;
};

type getAuthDataResponseType = {
  data: LoginResponseDataType;
  resultCode: ResultCodes;
  messages: Array<string>;
};
type getCaptchaResponseType = {
  url: any;
};
type getAuthResponseType = getAuthDataResponseType & getCaptchaResponseType
type logoutResponseType = {
  data: LoginResponseDataType;
  resultCode: ResultCodes;
  messages: Array<string>;
};

export const setLoginApi = {
  postLoginFormData({
    email,
    password,
    rememberMe,
    captcha,
  }: postLoginFormDataPtropsType) {
    return instance.post<getAuthResponseType>(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  getCatcha() {
    return instance.get<getCaptchaResponseType>(`/security/get-captcha-url`);
  },
  logout() {
    return instance.delete<logoutResponseType>(`auth/login`);
  },
};
