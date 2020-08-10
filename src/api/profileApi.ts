import { instance } from "./usersApi";

export const getProfileByUserAPI = {
  getUserIdFromUrl(userId: number, idFromProfile: number) {
    return instance.get(`profile/${userId || idFromProfile}`);
  },
};

export const userStatusAPI = {
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },
  setStatus(status: string) {
    return instance.put(`profile/status`, { status });
  },
};
