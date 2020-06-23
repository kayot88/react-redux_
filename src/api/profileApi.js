import { instance } from './usersApi';


export const getProfileByUserAPI =  {
  getUserIdFromUrl (userId) {
    return instance
    .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)

  }
} 
