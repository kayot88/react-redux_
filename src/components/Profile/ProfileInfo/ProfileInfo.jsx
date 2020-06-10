import React from "react";
import s from "./ProfileInfo.module.css";
import snow from "../../../img/snow.jpg";
import owl from "../../../img/owl.jpg";
import Spinner from './../../Spinner';

const ProfileInfo = (props) => {
  console.log("ProfileInfo", props);
  const {profile} = props
if (!profile.photos) {
  return <Spinner/>
} else {
  return (
    <div>
      <div>
        <img alt="" className={s.img} src={profile.photos.large || snow} />
      </div>
      <div className={s.descriptionBlock}>
        <img alt="" className={s.img} src={owl} />
      </div>
    </div>
  )
}


};

export default ProfileInfo;
