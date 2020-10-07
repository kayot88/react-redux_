import React, { useState, useEffect } from "react";

const UserStatus = React.memo((props: any) => {
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
        <div>
          <span onClick={statusClickHandler} data-testid="span">
            Enter status here
            {localStatus || "----"}
          </span>
        </div>
      )}
      {editMode && (
        <div className="test">
          <input
            data-testid="input"
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
});

export default UserStatus;
