import { instance } from "../../api/usersApi";

export const sendPhotoApi = {
  sendPhoto(photoObj: string) {
    const formData = new FormData();
    formData.append("image", photoObj);
    return instance.put("profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
