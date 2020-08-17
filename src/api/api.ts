import axios from "axios";

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

export type ResponseApiType<D = {}, RC = ResultCodes> = {
  data: D;
  resultCode: RC;
  messages: Array<string>;
};
