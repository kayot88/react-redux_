import { instance, ResultCodes } from "./usersApi";

type postLoginFormDataPtropsType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: any;
};

type LoginResponseDataType = {
  userId: number;
};

type getAuthDataResponseType = {
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
    return instance.post<getAuthDataResponseType>(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  getCatcha() {
    return instance.get(`/security/get-captcha-url`);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
