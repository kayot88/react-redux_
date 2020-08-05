import React, { useState } from "react";
import styles from "./ProfileData.module.css";
import ProfileContacts from "./ProfileContacts";

const ProfileData = ({ ...props }) => {
  const {
    aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    contacts
  } = props;

  console.log("props", props);

  let newObj = { aboutMe, lookingForAJob, lookingForAJobDescription, fullName };
  let newArr = Object.keys(newObj);
  return newArr.map((item) => {
    return (
      <div key={item} className="item">
        <b className="strong">{item}</b> : {props[item]}
      </div>
    );
  });
};

export default ProfileData;
