import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  // debugger;

  return (
    <div>
      <ProfileInfo profile={props.profile} isLoading={props.isLoading} />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
