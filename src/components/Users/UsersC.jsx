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
  const countPages = Math.ceil(totalCount / countByPage);
  const countPagesArr = [];

  for (let i = 1; i <= countPages; i++) {
    countPagesArr.push(i);
  }

  const styleS = {
    transform: `transform: rotate(19deg)`,
  };
  console.log(props);
  return (
    <div>
      <div>
        {
          <Paginator
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            countPagesArr={countPagesArr}
          />
        }
      </div>
      {<User {...props} />}
    </div>
  );
};

export default Users;
