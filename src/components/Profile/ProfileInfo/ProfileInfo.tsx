import React, { useState } from "react";
import FileChanger from "../../../common/FileChangerFeature/FileChanger/FileChanger";
import Spinner from "../../../common/Spinner";
import owl from "../../../img/owl.jpg";
import { ProfileType, PhotosType } from "../../../types/types";
import ProfileContacts from "../ProfileDataFeature/ProfileData/ProfileContacts";
import ProfileData from "../ProfileDataFeature/ProfileData/ProfileData";
import ProfileDataForm from "../ProfileDataFeature/ProfileData/ProfileDataForm";
import s from "./ProfileInfo.module.css";
import UserStatus from "./Status copy";

type ProfileInfoPropsType = {
  profile: ProfileType;
  profileDataThunk: (profile: ProfileType) => Promise<any>;
  isOwner: boolean;
  fileChangerThunk: (file: string) => void;
  userPhoto: PhotosType;
  isLoading: boolean;
  // children?: React.ReactElement;
  children?: any;
};

const ProfileInfo: React.FC<ProfileInfoPropsType> = (
  props: ProfileInfoPropsType
) => {
  const {
    aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    contacts,
    photos,
  } = props.profile;

  const [editMode, setEditMode] = useState(false);

  const DblClickHandler = () => {
    console.log("DblClickHandler");
    setEditMode(true);
  };

  const onSubmit = (formData: any) => {
    props.profileDataThunk(formData).then(() => {
      setEditMode(false);
    });
  };

  if (!props.profile && !photos) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div className={s.descriptionBlock}>
          <img alt="" className={s.img} src={props.userPhoto.small || owl} />
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
                  <ProfileContacts contacts={contacts} {...props} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
};
const ProfileInfoMomorized = React.memo(ProfileInfo);

export default ProfileInfoMomorized;
