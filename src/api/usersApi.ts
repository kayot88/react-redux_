import axios, { AxiosResponse } from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": process.env.REACT_APP_API_KEY },
});

export enum ResultCodes {
  success = 0,
  error = 1,
  captchaIsRequired = 10,
}

export const usersApi = {
  getUsers(currentPage: number = 2, countByPage: number = 20) {
    return instance.get(`./users?page=${currentPage}&count=${countByPage}`);
  },
  followApi(userId: number) {
    return instance.post(`./follow/${userId}`);
  },
  unFollowApi(userId: number) {
    return instance.delete(`./follow/${userId}`);
  },
};

type ResponseDataType = {
  id: number;
  email: string;
  login: string;
};

type getAuthDataResponseType = {
  data: ResponseDataType;
  resultCode: ResultCodes;
  messages: Array<string>;
};

export const getAuthUserApi = {
  getAuthData() {
    return instance.get<getAuthDataResponseType>(`auth/me`, {
      withCredentials: true,
    });
  },
};

// instance.get<string>(`auth/me`).then((res) => res.data.);
