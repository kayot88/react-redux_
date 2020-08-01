import React from "react";
import styles from "./User.module.css";
import { NavLink } from "react-router-dom";

const User = ({
  onUnFollowClick,
  onFollowClick,
  users,
  isFollowingingAction,
  isFollowProgres,
}) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  className={styles.userAva}
                  src={user.photos.small || "https://loremflickr.com/100/100"}
                  alt=""
                />
              </NavLink>
              <div>
                {user.followed === true ? (
                  <button
                    disabled={isFollowProgres.some((id) => id === user.id)}
                    onClick={() => {
                      isFollowingingAction(true, user.id);
                      onUnFollowClick(user.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    disabled={isFollowProgres.some((id) => id === user.id)}
                    onClick={() => {
                      isFollowingingAction(true, user.id);
                      onFollowClick(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default User;
