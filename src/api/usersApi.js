import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": process.env.REACT_APP_API_KEY },
});

export const usersApi = {
  getUsers(currentPage = 1, countByPage = 10) {
    console.log(process);
    return instance.get(`./users?page=${currentPage}&count=${countByPage}`);
  },
  followApi(userId) {
    return instance.post(`./follow/${userId}`);
  },
  unFollowApi(userId) {
    return instance.delete(`./follow/${userId}`);
  },
};
