import React from "react";
import { Formik } from "formik";
import "./resource/signin.css";
import google from "./resource/google.png";
import login_mobile from "./resource/loginmobile.png";
import Swal from "sweetalert2";
import * as Yup from "yup";
import NavBar from "./navBar";
import { useNavigate } from "react-router-dom";
import app_config from "../../config";

const SignIn = () => {
  //   4. Create Validation Schema

  const navigate = useNavigate();
  const url = app_config.backend_url;

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

  const loginSubmit = (formdata) => {
    fetch(url + "/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: "Successfully Logged In!",
          icon: "success",
        });

        res.json().then((data) => {
          if (data.isAdmin) {
            sessionStorage.setItem("admin", JSON.stringify(data));
            navigate("/admin/managelocation");
            return;
          } else {
            sessionStorage.setItem("user", JSON.stringify(data));
            navigate("/user/home");
            return;
          }
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Login Failed",
        });
      }
    });
  };
  return (
    <>
      <NavBar />
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
            onSubmit={loginSubmit}
          >
            {({ values, handleSubmit, handleChange, errors, touched }) => (
              <form className="signin-form" onSubmit={handleSubmit}>
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
