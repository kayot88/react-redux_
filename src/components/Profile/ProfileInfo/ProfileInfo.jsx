import React from "react";
import s from "./ProfileInfo.module.css";
import owl from "../../../img/owl.jpg";
import snow from "../../../img/snow.jpg";
import Spinner from "./../../Spinner";

const ProfileInfo = (props) => {
  const { profile, isLoading } = props;
  if (!props.profile) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div className={s.descriptionBlock}>
          <img alt="" className={s.img} src={owl} />
          ava
        </div>
      </div>
    );
  }
};

export default ProfileInfo;
