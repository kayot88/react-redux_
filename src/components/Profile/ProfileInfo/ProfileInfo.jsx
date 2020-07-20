import React from "react";
import s from "./ProfileInfo.module.css";
import owl from "../../../img/owl.jpg";
import Spinner from "./../../Spinner";
import UserStatus from "./Status";

const ProfileInfo = (props) => {
  // console.log("props.profil", props.profile);
  if (!props.profile) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div className={s.descriptionBlock}>
          <img alt="" className={s.img} src={owl} />
          <UserStatus {...props} />
        </div>
      </div>
    );
  }
};

export default ProfileInfo;
