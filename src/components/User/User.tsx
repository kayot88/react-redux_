import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { UserType, followInProgresPayload } from "../../types/types";
import styles from "./User.module.css";

type UserPropsType = {
  onUnFollowClick: (userId: number) => void;
  onFollowClick: (userId: number) => void;
  users: Array<UserType>;
  isFollowProgres: Array<number>;
};



const User: FC<UserPropsType> = ({
  onUnFollowClick,
  onFollowClick,
  users,
  // isFollowingingAction,
  isFollowProgres,
}) => {
  console.log("isFollowProgres", isFollowProgres);
  // debugger
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
                    // disabled={isFollowProgres.some((id) => id === user.id)}
                    onClick={() => {
                      // isFollowingingAction(true, user.id);
                      onUnFollowClick(user.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    // disabled={isFollowProgres.some((id) => id === user.id)}
                    onClick={() => {
                      console.log("user.id", user.id);
                      // isFollowingingAction(true, user.id);
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
