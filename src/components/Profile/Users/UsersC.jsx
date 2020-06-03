import React, { Component } from "react";
import * as axios from "axios";
import styles from "./Users.module.css";

export class Users extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countByPage}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalCount(res.data.totalCount);
      });
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countByPage}`
        )
        .then((res) => {
          this.props.setUsers(res.data.items);
        });
    }
  }

  render() {
    console.log(this.props.currentPage);
    const { totalCount, countByPage, currentPage, setCurrentPage } = this.props;
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
        {this.props.users.map((user) => {
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
                        this.props.onUnFollowClick(user.id);
                      }}
                    >
                      UnFollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.onFollowClick(user.id);
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
  }
}

export default Users;
