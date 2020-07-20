import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Spinner from "./../Spinner/index";

const Profile = (props) => {
  console.log(props);
  const { isLoading, profile } = props;
  // if (isLoading) {
  //   return <Spinner />;
  // } 
  return (
    <div>
      <ProfileInfo
        {...props}
        profile={profile}
        isLoading={isLoading}
        // setStatusTC={props.setStatusTC}
      />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
