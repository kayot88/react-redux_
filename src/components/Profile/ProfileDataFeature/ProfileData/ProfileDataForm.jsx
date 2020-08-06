import React from "react";
import { reduxForm } from "redux-form";
import { Input, Textarea } from "../../../../assets/validation/formValidate";
import { createField, validate } from "./../../../../assets/validation/formValidate";

export let ProfileDataForm = ({ handleSubmit, error, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <div>
        <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:{" "}
        {createField("", "lookingForAJob", [], Input, {
          type: "checkbox",
        })}
      </div>

      <div>
        <b>My professional skills</b>:
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>

      <div>
        <b>About me</b>:{createField("About me", "aboutMe", [], Textarea)}
      </div>
      <b>Contacts: </b>
      {Object.keys(profile.contacts).map((item) => {
        return (
          <b key={item}>
            {item}:{createField(item, "contacts." + item, [], Input)}
          </b>
        );
      })}
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

ProfileDataForm = reduxForm({ form: "ProfileDataForm", validate })(
  ProfileDataForm
);
