import React from "react";

const withSuspense = (Component) => (props) => {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default withSuspense;
