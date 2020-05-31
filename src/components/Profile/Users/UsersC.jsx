import React, { Component } from "react";
import * as axios from "axios";
// import { setUsers } from "./../../../ac/usersPage";
import styles from "./Users.module.css";

export class Users extends Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => {
        // console.log(res);
        this.props.setUsers(res.data.items);
      });
  }

  render() {
    // const { users, setUsers, onUnFollowClick, onFollowClick } = this.props;
    console.log("users", this.props.users);
    return (
      <div>
        {/* <button onClick={this.getUsers}>Get users</button> */}

        {this.props.users.map((user) => {
          return (
            <div key={user.id}>
              <div>
                <img
                  className={styles.userAva}
                  src={
                    user.photos.small ||
                    "https://loremflickr.com/100/100"
                  }
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
              <div>
                {/* <div>{user.location.city}</div>
          <div>{user.location.country}</div> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
