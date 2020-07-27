import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Spinner from "./../Spinner/index";

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
