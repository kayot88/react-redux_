import { instance, ResponseApiType } from "./api";
import { ProfileType } from "../types/types";

export const getProfileByUserAPI = {
  getUserIdFromUrl(userId: number, idFromProfile: number) {
    return instance.get<ProfileType>(`profile/${userId || idFromProfile}`);
  },
};

export const userStatusAPI = {
  getStatus(userId: number) {
    return instance
      .get<string>(`profile/status/${userId}`)
      .then((res) => res.data);
  },
  setStatus(status: string) {
    return instance
      .put<ResponseApiType>(`profile/status`, { status })
      .then((res) => res.data);
  },
};
