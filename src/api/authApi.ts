import { instance, ResponseApiType } from "./api";

type ResponseDataType = {
  id: number;
  email: string;
  login: string;
};

export const getAuthUserApi = {
  getAuthData() {
    return instance.get<ResponseApiType<ResponseDataType>>(`auth/me`, {
      withCredentials: true,
    });
  },
};
