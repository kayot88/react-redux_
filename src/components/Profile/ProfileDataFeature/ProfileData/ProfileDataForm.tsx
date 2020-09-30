import React from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import { Input, Textarea } from "../../../../assets/validation/formValidate";
import {
  createField,
  validate,
} from "../../../../assets/validation/formValidate";
import { ProfileType } from "../../../../types/types";
import { FromConnectTypes } from "../../ProfileContainer";

type PropsType = {
  profile: ProfileType;
};

type ProfileDataFormType = {
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  aboutMe: string;
  contacts: {} | null;
};

type availableNames = Extract<keyof ProfileDataFormType, string>;

let ProfileDataForm: React.FC<
  InjectedFormProps & FromConnectTypes & PropsType
> = ({ handleSubmit, error, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <div>
        <b>Full name</b>:{" "}
        {createField<availableNames>("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:{" "}
        {createField<availableNames>("", "lookingForAJob", [], Input, {
          type: "checkbox",
        })}
      </div>

      <div>
        <b>My professional skills</b>:
        {createField<availableNames>(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>

      <div>
        <b>About me</b>:
        {createField<availableNames>("About me", "aboutMe", [], Textarea)}
      </div>
      <b>Contacts: </b>
      {Object.keys(profile.contacts).map((item) => {
        return (
          <b key={item}>
            {item}:{createField<availableNames>(item, "contacts", [], Input)}
          </b>
        );
      })}
      <div>
        <button>Save</button>
      </div>
    </form>
  ); /*  */
};

export default reduxForm({ form: "ProfileDataForm", validate })(
  ProfileDataForm
);
