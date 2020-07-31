import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  const { isLoading, profile } = props;
  return (
    <div>
      <ProfileInfo
        {...props}
        profile={profile}
        isLoading={isLoading.isLoading}
      />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
