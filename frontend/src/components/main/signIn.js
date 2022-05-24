import React from "react";
import { Formik } from "formik";
import "./resource/signin.css";
import google from "./resource/google.png";
import login_mobile from "./resource/loginmobile.png";
import Swal from "sweetalert2";
import * as Yup from "yup";
import NavBar from "./navBar";

const SignIn = () => {
  //   4. Create Validation Schema

  const emailRegExp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const myValidation = Yup.object().shape({
    email: Yup.string()
      .matches(emailRegExp, "Email Invalid")
      .required("Enter Email"),

    password: Yup.string()
      .min(6, "Too Short!!")
      .max(12, "Very Long To Remember")
      .required("Password Required"),
  });
  return (
    <>
    <NavBar/>
    <div className="signin-body"></div>
      <div className="signin-container">
        <div className="one-signin-con">
          <img src={login_mobile} alt="" />
          <div className="account-signin">
            <h1>Login your Account</h1>
          </div>
        </div>
        <div className="two-signin-con">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={myValidation}
            onSubmit={(formdata) => {
              // same shape as initial values
              console.log(formdata);

              //   fetch(url + "/user/add", {
              //     method: "POST",
              //     body: JSON.stringify(formdata),
              //     headers: {
              //       "Content-Type": "application/json",
              //     },
              //   })
              //     .then((res) => res.json())
              //     .then((data) => {
              //       console.log(data);
              //       Swal.fire({
              //         icon: "success",
              //         title: "Success",
              //         text: "Registered Successfully",
              //       });
              //     });
            }}
          >
            {({ values, handleSubmit, handleChange, errors, touched }) => (
              <form action="" className="signin-form" onSubmit={handleSubmit}>
                <div className="main-signin-head">
                  <h1>Sign In</h1>
                  <p>Enter your credentials to access your account </p>

                  <input
                    className="image"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  {errors.email && touched.email ? (
                    <div className="signin-error">{errors.email}</div>
                  ) : null}

                  <input
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? (
                    <div className="signin-error">{errors.password}</div>
                  ) : null}
                  <button type="submit">Sign In</button>
                </div>
                <div className="main-signin-info">
                  <p>OR</p>
                  <div className="google-signin">
                    <button>
                      {" "}
                      <img src={google} alt="" />{" "}
                      <span> Sign In with Google</span>
                    </button>
                  </div>

                  <p>
                  Create a new account? <a href="signup"> Sign Up</a>
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default SignIn;
