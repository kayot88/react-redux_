import React, { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  getUsers,
  onFollowClick,
  onUnFollowClick,
  UserPageActions,
} from "../../ac/usersPage";
import Spinner from "../../common/Spinner";
import { AppStateType } from "../../redux/redux-store";
import {
  countByPageReselect,
  currentPageReselect,
  isFollowingReselect,
  isLoadingReselect,
  totalCountReselect,
  usersReselect,
} from "../../selectors";
import { UserType } from "../../types/types";
import { withAuth } from "../hoc/withAuth";
import Users from "./UsersC";

type UsersContMstpType = {
  isLoading: boolean;
  totalCount: number;
  countByPage: number;
  currentPage: number;
  users: Array<UserType>;
  followInProgres: Array<number>;
  portionSize: number;
};
type UsersContOwnType = {
  title: string;
};

type PropsType = PropsFromReduxType & UsersContOwnType;

class UsersApiContainer extends Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.countByPage);
  }
  componentDidUpdate(prevProps: any) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.getUsers(this.props.currentPage, this.props.countByPage);
    }
  }

  render() {
    return this.props.isLoading ? (
      <Spinner />
    ) : (
      <div>
        <h2>{this.props.title}</h2>
        <Users
          totalCount={this.props.totalCount}
          countByPage={this.props.countByPage}
          currentPage={this.props.currentPage}
          setCurrentPage={this.props.setCurrentPage}
          onUnFollowClick={this.props.onUnFollowClick}
          onFollowClick={this.props.onFollowClick}
          users={this.props.users}
          isFollowProgres={this.props.followInProgres}
          // isFollowingingAction={this.props.isFollowing}
          portionSize={this.props.portionSize}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType): UsersContMstpType => {
  return {
    users: usersReselect(state),
    totalCount: totalCountReselect(state),
    countByPage: countByPageReselect(state),
    currentPage: currentPageReselect(state),
    isLoading: isLoadingReselect(state),
    followInProgres: isFollowingReselect(state),
    portionSize: 10,
  };
};


const {
  setUsers,
  setCurrentPage,
  setTotalCount,
  isLoadingAC,
  followInProgres,
} = UserPageActions;

type PropsFromReduxType = ConnectedProps<typeof connector>;
const connector = connect(mapStateToProps, {
  onFollowClick,
  onUnFollowClick,
  setUsers,
  setCurrentPage,
  setTotalCount,
  isLoadingAC,
  followInProgres,
  getUsers,
});

export default compose<React.ComponentType<{ title: string }>>(
  connector,
  withRouter,
  withAuth
)(UsersApiContainer);
