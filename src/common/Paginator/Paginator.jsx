import React from "react";
import styles from "./Paginator.module.css";

const Paginator = ({ currentPage, setCurrentPage, countPagesArr }) => {
  return (
    <div>
      <div>
        {countPagesArr.reverse().map((page) => {
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
      </div>
    </div>
  );
};

export default Paginator;
