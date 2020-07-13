import { instance } from "./usersApi";

export const setLoginApi = {
         postLoginFormData({ email, password, rememberMe, captcha }) {
           return instance.post(`auth/login`, {
             email,
             password,
             rememberMe,
             captcha,
           });
         },
         logout() {
           return instance.delete(`auth/login`);
         },
       };