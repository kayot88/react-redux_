import { instance } from "./usersApi";

export const getProfileByUserAPI = {
  getUserIdFromUrl(userId, idFromProfile) {
    return instance.get(`profile/${userId || idFromProfile}`);
  },
};

export const userStatusAPI = {
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  setStatus(status) {
    return instance.put(`profile/status`, { status });
  },
};
