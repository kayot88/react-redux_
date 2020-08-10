import { instance } from "../../../api/usersApi";

export const saveProfileDataApi = {
  saveProfileData(formData: any) {
    return instance.put("profile", formData);
  },
};
