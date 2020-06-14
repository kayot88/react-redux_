import React from "react";
import s from "./ProfileInfo.module.css";
import snow from "../../../img/snow.jpg";
import owl from "../../../img/owl.jpg";
import Spinner from './../../Spinner';

const ProfileInfo = (props) => {
  console.log("ProfileInfo", props);
  const {profile} = props
  console.log(profile.photos);
if (!profile.photos) {
  return <Spinner/>
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
  )
}


};

export default ProfileInfo;
