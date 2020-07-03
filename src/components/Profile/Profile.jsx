import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  console.log("Profile_props", props);
  return (
    <div>
      <ProfileInfo
        {...props}
        profile={props.profile}
        isLoading={props.isLoading}
        // setStatusTC={props.setStatusTC}
      />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
