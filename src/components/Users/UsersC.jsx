import React from "react";
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";

const Users = ({
  totalCount,
  countByPage,
  currentPage,
  setCurrentPage,
  onUnFollowClick,
  onFollowClick,
  users,
  isFollowingingAction,
  isFollowProgres,
}) => {
  const countPages = Math.ceil(totalCount / countByPage);
  const countPagesArr = [];

  for (let i = 1; i <= countPages; i++) {
    countPagesArr.push(i);
  }

  const styleS = {
    transform: `transform: rotate(19deg)`,
  };

  return (
    <div>
      <div>
        {countPagesArr.reverse().map((page) => {
          return (
            <span
              key={page}
              onClick={() => {
                setCurrentPage(page);
              }}
              style={styleS}
              className={`${styles.pages}
                  ${currentPage === page && styles.currentPage} `}
            >
              {page}
            </span>
          );
        })}
      </div>
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

export default Users;
