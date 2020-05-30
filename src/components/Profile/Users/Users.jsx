import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
  const { users, setUsers, onUnFollowClick, onFollowClick } = props;
  if (users.length === 0) {
    setUsers([
      {
        id: 1,
        ava:
          "https://www.soyuz.ru/public/uploads/files/5/6969555/1005x558_20170309234806f64647215b.jpg",
        fullName: "Roman",
        status: "i`m a boss",
        location: { city: "Poltava", country: "Ukraine" },
        followed: false,
      },
      {
        id: 2,
        ava:
          "https://img04.rl0.ru/51f6ae88d199cbf635aa24623c18c7f6/c615x400i/news.rambler.ru/img/2017/12/25180135.218936.2087.jpeg",
        fullName: "Svirid",
        status: "i`m a pocc",
        location: { city: "Minsk", country: "Belarus" },
        followed: true,
      },
      {
        id: 3,
        ava:
          "https://www.2queens.ru/Uploads/sanina_e/jackie%20chan%2007.04.2016.jpg",
        fullName: "Stepan",
        status: "i`m a tep",
        location: { city: "Kish", country: "Moldova" },
        followed: false,
      },
    ]);
  }
  return users.map((user) => {
    return (
      <div key={user.id}>
        <div>
          <img className={styles.userAva} src={user.ava} alt="" />
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
          <div>{user.fullName}</div>
          <div>{user.status}</div>
        </div>
        <div>
          <div>{user.location.city}</div>
          <div>{user.location.country}</div>
        </div>
      </div>
    );
  });
};

export default Users;
