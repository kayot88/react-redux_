import React from "react";
import MyPostsContainer, { PropsFromConnect } from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { AppStateType } from "../../redux/redux-store";
import { FromConnectTypes } from "./ProfileContainer";
import { ProfileType } from "../../types/types";

type OwnProps = {
  setStatus: (status: string) => Promise<void>;
  isOwner: boolean
  profile: ProfileType
  store: any
  // isLoading: boolean
};
type ProfilePropsType = FromConnectTypes & OwnProps ;
 
const Profile: React.FC<ProfilePropsType> = (props: ProfilePropsType) => {
  // console.log(props);
  const { isLoading, profile } = props;
  return (
    <div>
      <ProfileInfo
        {...props}
        profile={profile}
        isLoading={isLoading}
      />
      <MyPostsContainer  />
    </div>
  );
};

export default Profile;
