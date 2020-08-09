import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { UserType, followInProgresPayload } from "../../types/types";
import styles from "./User.module.css";

type UserPropsType = {
  onUnFollowClick: () => void;
  onFollowClick: (userId: number) => void;
  users: Array<UserType>;
  isFollowingingAction: (following: boolean, userId: number) => void;
  isFollowProgres: Array<number>;

};



const User: FC<UserPropsType> = ({
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
                      onUnFollowClick();
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
