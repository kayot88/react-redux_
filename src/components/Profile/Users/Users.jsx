import React from "react";
import * as axios from "axios";
import styles from "./Users.module.css";

const Users = (props) => {
  const { users, setUsers, onUnFollowClick, onFollowClick } = props;
  let getUsers = (params) => {
    if (users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((res) => {
          setUsers(res.data.items);
        });
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get users</button>

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
            <div>
              {/* <div>{user.location.city}</div>
          <div>{user.location.country}</div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
