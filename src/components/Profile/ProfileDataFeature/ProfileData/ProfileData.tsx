import React, { FC } from "react";
// type ProfileDataType = {
//   aboutMe;
//   lookingForAJob;
//   lookingForAJobDescription;
//   fullName;
//   contacts;
//   DblClickHandler;
// };

const ProfileData: any = ({ ...props }: any) => {
  const {
    aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    contacts,
    DblClickHandler,
  } = props;

  // console.log("props", props);

  let newObj = { aboutMe, lookingForAJob, lookingForAJobDescription, fullName };
  let newArr = Object.keys(newObj);
  return newArr.map((item) => {
    return (
      <div key={item} className="item">
        <b className="strong" onDoubleClick={DblClickHandler}>
          {item}
        </b>
        : {props[item]}
      </div>
    );
  });
};

export default ProfileData;
