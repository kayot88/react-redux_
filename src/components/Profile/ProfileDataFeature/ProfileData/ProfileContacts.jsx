import React, { useState } from "react";
import styles from "./ProfileData.module.css";

const ProfileContacts = ({ contacts }) => {
  let newArr = Object.keys(contacts);
  return newArr.map((item) => {
    return (
        <div key={Math.random(5)} className="item">
          <b className="strong">{item}</b> : {contacts[item] || "----"}
        </div>
    );
  });
};

export default ProfileContacts;
