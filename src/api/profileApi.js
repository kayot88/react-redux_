import { instance } from "./usersApi";

export const getProfileByUserAPI = {
  getUserIdFromUrl(userId) {
    return instance.get(
      `profile/${userId}`
    );
  },
};
