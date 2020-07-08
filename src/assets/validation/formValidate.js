import React from "react";

export const validate = (values) => {
  const errors = {};
  if (!values.newPostText) {
    errors.newPostText = "Reguired";
  } else if (values.newPostText.length < 10) {
    errors.newPostText = "Status must be 10 symbols or more";
  }
  return errors;
};

// export const warn = (values) => {
//   const warnings = {};
//   if (values.newPostText.length < 10) {
//     warnings.newPostText = "Status must be 10 symbols or more";
//   }
//   return warnings;
// };

export const renderField = (El) => ({
         input,
         meta,
         ...props
       }) => {
         return (
           <div>
             <label>{props.label}</label>
             <div>
               <El {...input} type={props.type} placeholder={props.label} />
             </div>
             {meta.touched &&
               ((meta.error && <span>{meta.error}</span>) ||
                 (meta.warning && <span>{meta.warning}</span>))}
           </div>
         );
       };
