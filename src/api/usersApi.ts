import { UserType } from "../types/types";
import { instance, ResponseApiType } from "./api";

type GetUsersResponse = {
  items: Array<UserType>;
  totalCount: number;
  error: string;
};

export const usersApi = {
  getUsers(currentPage: number = 2, countByPage: number = 20) {
    return instance.get<GetUsersResponse>(
      `./users?page=${currentPage}&count=${countByPage}`
    );
  },
  followApi(userId: number) {
    return instance
      .post<ResponseApiType>(`./follow/${userId}`)
      .then((res) => res.data);
  },
  unFollowApi(userId: number) {
    return instance
      .delete<ResponseApiType>(`./follow/${userId}`)
      .then((res) => res.data);
  },
};
