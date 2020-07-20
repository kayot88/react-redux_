import React, { Component, useState, useRef, useEffect } from "react";

const UserStatus = (props) => {
  // debugger
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(props.profile.status);
  // console.log(props.profile.profile.fullName);

  useEffect(() => {
    console.log(props);
    setLocalStatus(props.profile.status);
  }, [props.profile.status]);

  const statusClickHandler = () => {
    setEditMode(true);
    setLocalStatus(props.profile.status);
  };

  const deactivateStatus = () => {
    props.setStatusTC(localStatus);
    setEditMode(false);
  };

  return (
    <div>
      {!editMode && (
        <span onClick={statusClickHandler}>{localStatus || "----"}</span>
      )}
      {editMode && (
        <div>
          <input
            autoFocus
            onChange={(e) => setLocalStatus(e.currentTarget.value)}
            onBlur={deactivateStatus}
            value={localStatus}
            autoComplete="off"
          />
        </div>
      )}
    </div>
  );
};

export default UserStatus;
