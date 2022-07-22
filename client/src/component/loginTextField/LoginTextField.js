import React from "react";
import { ErrorMessage, useField } from "formik";
import "./LoginTextField.css";

const LoginTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="registerPageWrapper">
        <input
          autoComplete="off"
          className={`${meta.touch && meta.error}`}
          {...field}
          {...props}
        />
        <p className="error">
          <ErrorMessage name={field.name} />
        </p>
      </div>
    </>
  );
};

export default LoginTextField;
