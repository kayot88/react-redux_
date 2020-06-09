import React from "react";
import styles from "./Users.module.css";

const Users = ({
  totalCount,
  countByPage,
  currentPage,
  setCurrentPage,
  onUnFollowClick,
  onFollowClick,
  users,
}) => {
  const countPages = Math.ceil(totalCount / countByPage);
  const countPagesArr = [];

  for (let i = 1; i <= countPages; i++) {
    countPagesArr.push(i);
  }
  // console.log(countPages);
  
  const styleS = {
    transform: `transform: rotate(19deg)`,
  };

  return (
    <div>
      <div>
        {countPagesArr.map((page) => {
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
              <img
                className={styles.userAva}
                src={user.photos.small || "https://loremflickr.com/100/100"}
                alt=""
              />
              <div>
                {user.followed === true ? (
                  <button
                    onClick={() => {
                      onUnFollowClick(user.id);
                    }}
                  >
                    UnFollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
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
