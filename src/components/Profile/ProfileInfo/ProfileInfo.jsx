import React from "react";
import s from "./ProfileInfo.module.css";
import owl from "../../../img/owl.jpg";
import Spinner from "../../../common/Spinner";
import UserStatus from "./Status copy";
import FileChanger from "../../../common/FileChangerFeature/FileChanger/FileChanger";

const ProfileInfo = React.memo((props) => {
  if (!props.profile) {
    return <Spinner />;
  } else {
    console.log("props.userPhoto", props.profile.photos);
    return (
      <div>
        <div className={s.descriptionBlock}>
          <img alt="" className={s.img} src={props.userPhoto} />
          {props.isOwner && (
            <FileChanger fileChangerThunk={props.fileChangerThunk} />
          )}
          <UserStatus {...props} />
        </div>
      </div>
    );
  }
});

export default ProfileInfo;
