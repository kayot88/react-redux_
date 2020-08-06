import React, { useState } from "react";
import FileChanger from "../../../common/FileChangerFeature/FileChanger/FileChanger";
import Spinner from "../../../common/Spinner";
import owl from "../../../img/owl.jpg";
import ProfileData from "../ProfileDataFeature/ProfileData/ProfileData";
import { ProfileDataForm } from "../ProfileDataFeature/ProfileData/ProfileDataForm";
import s from "./ProfileInfo.module.css";
import UserStatus from "./Status copy";
import { profileDataThunk } from "../ProfileDataFeature/ducks";
import ProfileContacts from "../ProfileDataFeature/ProfileData/ProfileContacts";

const ProfileInfo = React.memo((props) => {
  const {
    aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    contacts,
  } = props.profile;

  const [editMode, setEditMode] = useState(false);

  // dblClick handler
  const DblClickHandler = () => {
    console.log("DblClickHandler");
    setEditMode(true);
  };

  const onSubmit = (formData) => {
    props.profileDataThunk(formData).then(() => {
      setEditMode(false);
    });
  };

  if (!props.profile && !props.profile.photos) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div className={s.descriptionBlock}>
          <img
            alt=""
            className={s.img}
            src={props.userPhoto.photos.image || owl}
          />
          {props.isOwner && (
            <FileChanger fileChangerThunk={props.fileChangerThunk} />
          )}
          <div className={s.userStatus}>
            <UserStatus {...props} />
          </div>
          {props.isOwner && (
            <div>
              <button onClick={() => setEditMode(true)}>Change info</button>
            </div>
          )}
          {editMode ? (
            <ProfileDataForm
              aboutMe={aboutMe}
              lookingForAJob={lookingForAJob}
              lookingForAJobDescription={lookingForAJobDescription}
              fullName={fullName}
              onSubmit={onSubmit}
              profile={props.profile}
            />
          ) : (
            <div>
              <ProfileData
                aboutMe={aboutMe}
                lookingForAJob={lookingForAJob}
                lookingForAJobDescription={lookingForAJobDescription}
                fullName={fullName}
                DblClickHandler={DblClickHandler}
              />
              {props.profile.contacts && (
                <div>
                  <b>Contacts:</b>
                  <ProfileContacts contacts={contacts} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
});

export default ProfileInfo;
