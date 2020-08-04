import React, { useState } from "react";
import styles from "./Paginator.module.css";

const Paginator = ({
  currentPage,
  setCurrentPage,
  countByPage,
  totalCount,
  portionSize = 10,
}) => {
  const countPages = Math.ceil(totalCount / countByPage);
  const countPagesArr = [];



  for (let i = 1; i <= countPages; i++) {
    countPagesArr.push(i);
  }

  let portionCount = Math.ceil(countPages / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;



  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      <div>
        {countPagesArr
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((page) => {
            return (
              <span
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                }}
                style={styles}
                className={`${styles.pages}
                  ${currentPage === page && styles.currentPage} `}
              >
                {page}
              </span>
            );
          })}
        {portionCount > portionNumber && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
