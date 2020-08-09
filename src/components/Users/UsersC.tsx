import React, { FC } from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "../User/User";
import { UserType } from "../../types/types";

type UsersPropType = {
  totalCount: number;
  countByPage: number;
  setCurrentPage: (pageId: number) => void;
  currentPage: number;
  portionSize: number;
  onUnFollowClick: (userId:number) => void;
  onFollowClick: (userId:number) => void;
  users: Array<UserType>;
  isFollowProgres: Array<number>;
  // isFollowingingAction: (following: boolean, userId: number) => void;
};

const Users: FC<UsersPropType> = ({
  totalCount,
  countByPage,
  setCurrentPage,
  currentPage,
  portionSize,
  isFollowProgres,
  ...props
}) => {
  return (
    <div>
      <div>
        {
          <Paginator
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            countByPage={countByPage}
            totalCount={totalCount}
            portionSize={portionSize}
          />
        }
      </div>
      {
        <User
          onUnFollowClick={props.onUnFollowClick}
          onFollowClick={props.onFollowClick}
          users={props.users}
          // isFollowingingAction={props.isFollowingingAction}
          isFollowProgres={isFollowProgres}
        />
      }
    </div>
  );
};

export default Users;
