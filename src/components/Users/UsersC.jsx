import React from "react";
import Paginator from "./../../common/Paginator/Paginator";
import User from "./../User/User";

const Users = ({
  totalCount,
  countByPage,
  setCurrentPage,
  currentPage,
  ...props
}) => {

  const styleS = {
    transform: `transform: rotate(19deg)`,
  };
  return (
    <div>
      <div>
        {
          <Paginator
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            countByPage={countByPage}
            totalCount={totalCount}
          />
        }
      </div>
      {<User {...props} />}
    </div>
  );
};

export default Users;
