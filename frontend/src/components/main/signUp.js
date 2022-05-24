import { Formik } from "formik";
import React,{useState} from "react";
import "./resource/signup.css";
import google from "./resource/google.png";
import signup_mobile from "./resource/signupmobile.png";
import app_config from "../../config";
import Swal from "sweetalert2";
import * as Yup from "yup";
import NavBar from "./navBar";
const SignUp = () => {
  const url = app_config.backend_url;
  // for sendind formdata to database
  
  //   4. Create Validation Schema
  const phoneRegExp =
    '/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/';
  const emailRegExp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const myValidation = Yup.object().shape({
    username: Yup.string()
      .min(5, "UserName Must Five Letter")
      .max(20, "Too Long!")
      .required("UserName Required"),
    email: Yup.string()
      .matches(emailRegExp, "Email Invalid")
      .required("Enter Email"),
    mobile: Yup.string()
      .min(10, "Enter Valid Mobile Number")
      .max(10, "Mobile Number Must Be 10 Digits")
      .matches(phoneRegExp,"Mobile number is not valid")
      .required("Phone No Required"),
    password: Yup.string()
      .min(6, "Too Short!!")
      .max(12, "Very Long To Remember")
      .required("Password Required"),
  });
  

  return (
    <>
      <NavBar/><div className="center">
      <div className="signup-container ">
        <div className="one-signup-con">
          <img src={signup_mobile} alt="" />
          <div className="signup-account">
            <h1>Create a new Account</h1>
          </div>
        </div>
        <div className="two-signup-con">
          <Formik
            initialValues={{
              username: "",
              email: "",
              mobile: "",
              password: "",
            }}
            
            validationSchema={myValidation}
            onSubmit={(formdata) => {
              // same shape as initial values
              console.log(formdata);

              fetch(url + "/user/add", {
                method: "POST",
                body: JSON.stringify(formdata),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Registered Successfully",
                  });
                });

            }}
          >
            {({ values, handleSubmit, handleChange, errors, touched }) => (
              <form className="signup-form"onSubmit={handleSubmit}>
                <div className="main-signup-head">
                  <h1>Sign Up</h1>
                  <p>Let's set up your personal account</p>

                  <input
                    name="username"
                    id="username"
                    value={values.username}
                    onChange={handleChange}
                    placeholder="UserName"
                  />
                  {errors.username && touched.username ? (
                    <div className="signup-error">{errors.username}</div>
                  ) : null}
                  <input
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                  {errors.email && touched.email ? (
                    <div className="signup-error">{errors.email}</div>
                  ) : null}
                  <input
                    name="mobile"
                    type="mobile"
                    id="mobile"
                    value={values.mobile}
                    onChange={handleChange}
                    placeholder="Mobile No"
                  />
                  {errors.mobile && touched.mobile ? (
                    <div className="signup-error">{errors.mobile}</div>
                  ) : null}
                  <input
                    name="password"
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? (
                    <div className="signup-error">{errors.password}</div>
                  ) : null}
                  <button type="submit" >Cerate Account</button>
                </div>
                <div className="main-signup-info">
                  <p>OR</p>
                  <div className="signup-google">
                    <button>
                      {" "}
                      <img src={google} alt="" />{" "}
                      <span> Sign up with Google</span>
                    </button>
                  </div>

                  <p>
                    Already have an account? <a href="signIn"> Sign In</a>
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      </div>
    </>
  );
};

export default SignUp;
