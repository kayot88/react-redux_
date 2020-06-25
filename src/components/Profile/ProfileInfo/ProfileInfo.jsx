import React from "react";
import s from "./ProfileInfo.module.css";
import owl from "../../../img/owl.jpg";
import snow from "../../../img/snow.jpg";
import Spinner from "./../../Spinner";

const ProfileInfo = (props) => {
  const { profile, isLoading } = props;
  console.log(profile);
  if (isLoading && !profile.photos) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div>
          <img alt="" className={s.img} src={profile.photos.small || snow} />
        </div>
        <div className={s.descriptionBlock}>
          <img alt="" className={s.img} src={owl} />
        </div>
      </div>
    );
  }
};

export default ProfileInfo;
