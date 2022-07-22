import React from "react";
import "./Login.css";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoginTextField from "../../component/loginTextField/LoginTextField";
import { login } from "../../redux/apicalls";
import { useDispatch } from "react-redux";

const Login = () => {
const dispatch = useDispatch()


  const validate = Yup.object({
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });


  
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          login(dispatch, values);
        }}
      >
        <Form>
          <div className=" loginPage">
            <div className="loginFrom">
              <div className="compantLogo">
                {/* <img src={Logo} alt="logo" /> */}
              </div>
              <div className=" LoginFormContainer">
                <h4>Sign-In</h4>
                <div className="inputBox mt-3">
                  <label>Email</label>
                  <LoginTextField label="Email" name="email" type="text" />
                </div>

                <div className="inputBox mt-2">
                  <label>Password</label>
                  <LoginTextField
                    label="Password"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="inputBox mt-2">
                  {/* login button */}
                  <button
                  // disabled={isFetching}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      {/* ReactToastify container */}
      {/* <ToastContainer /> */}
    </>
  );
};

export default Login;
