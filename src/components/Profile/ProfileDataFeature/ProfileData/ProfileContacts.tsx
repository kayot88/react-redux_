import mathRandom from "math-random";
import React from "react";

type ProfileContactsType = {
  contacts: any;
};

const ProfileContacts: any = ({             /* 💩 ❓ */
  contacts,
}: ProfileContactsType): JSX.Element[] => {
  let newArr = Object.keys(contacts);
  return newArr.map((item) => {
    return (
      <React.Fragment>
        <div key={mathRandom()} className="item">
          <b className="strong">{item}</b> : {contacts[item] || "----"}
        </div>
      </React.Fragment>
    );
  });
};

export default ProfileContacts;
