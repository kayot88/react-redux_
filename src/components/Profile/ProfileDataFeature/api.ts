import { instance, ResponseApiType } from "../../../api/api";
import { ProfileType, PhotosType } from "../../../types/types";

type ResponsePhotosType = {
  photos: PhotosType;
};

export const saveProfileDataApi = {
  saveProfileData(formData: ProfileType) {
    return instance
      .put<ResponseApiType>("profile", formData)
      .then((res) => res.data);
  },
};
