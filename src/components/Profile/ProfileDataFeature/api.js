import { instance } from "../../../api/usersApi";

export const saveProfileDataApi = {
  saveProfileData(formData) {
    return instance.put("profile", formData);
  },
};
