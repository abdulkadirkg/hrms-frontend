import { useField, Field } from "formik";
import React from "react";

export default function HRMSTextInput({ ...props }) {
  const [field, meta] = useField(props);
  const { label } = { ...props };
  return (
    <div>
      <label>{label}</label>
      <Field {...field} {...props} >
          {props.children}
      </Field>
      {meta.touched && !!meta.error ? <small className="d-block text-danger">{meta.error}</small> : null}
    </div>
  );
}
