import React, { useState, useEffect } from "react";

const UserStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(props.status);

  useEffect(() => {
    setLocalStatus(props.status);
  }, [props.status]);

  const statusClickHandler = () => {
    setEditMode(true);
    setLocalStatus(props.status);
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
