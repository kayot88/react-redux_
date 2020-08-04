import React, { useState } from "react";
import styles from "./FileChanger.module.css";

const FileChanger = ({ fileChangerThunk }) => {
  const changeMainPhoto = (e) => {
    if (e.target.files.length) {
      fileChangerThunk(e.target.files[0]);
    }
  };
  return (
    <div className={styles.fileChanger}>
      <input type="file" onChange={changeMainPhoto} />
    </div>
  );
};

export default FileChanger;
