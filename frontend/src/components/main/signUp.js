import { Field,  Formik } from "formik";
import React from "react";
import "./resource/signup.css";
import google from "./resource/google.png";
import signup_mobile from "./resource/signupmobile.png";
// import Swal from "sweetalert2";
import * as Yup from "yup";
const SignUp = () => {
  const signUpForm = {
    username: "",
    email: "",
    phone: "",
    password: "",
  };
  // 2. create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);

    // 1. Address
    // 2. Request method
    // 3. Data
    // 4. Data Format

    
  };
  //   4. Create Validation Schema
  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const myValidation = Yup.object().shape({
    username:Yup.string().min(6, 'usename must six letter').max(20,'too long!').required('username required'),
    email: Yup.string().email("Invalid Email").required("Enter Email"),
    // phone:Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    password: Yup.string().min(3, "Too Short!!").required("Password Required"),
  });

  return (
    <>
      <div className="container">
        <div className="one-sub-con">
          <img src={signup_mobile} alt="" />
          <div className="account">
            <h1>Cerate a new Account</h1>
          </div>
        </div>
        <div className="two-sub-con">
          <Formik
            initialValues={signUpForm}
            onSubmit={userSubmit}
            validationSchema={myValidation}
            >
            
            {({ values, handleChange, handleSubmit, errors }) => (
              <form onSubmit={handleSubmit} action="">
                <div className="main-head">
                  <h1>Sign Up</h1>
                  <p>Let's set up your personal account</p>

                  <Field
                    name="username"
                    type="name"
                    id="username"
                    value={values.username}
                    onChange={handleChange}
                    placeholder="UserName"
                    helperText={errors.username}
                    error={Boolean(errors.username)}
                  />
                  <input
                    name="email"
                    type="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Email"
                    helperText={errors.email}
                    error={Boolean(errors.email)}
                  />
                  <input
                    name="phone"
                    type="phone"
                    id="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="Phone No"
                    helperText={errors.phone}
                    error={Boolean(errors.phone)}
                  />
                  <input
                    name="password"
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Password"
                    helperText={errors.password}
                    error={Boolean(errors.password)}
                  />
                  <button type="submit">Cerate Account</button>
                </div>
                <div className="main-info">
                  <p>OR</p>
                  <div className="google">
                    <button>
                      {" "}
                      <img src={google} alt="" />{" "}
                      <span> Sign up with Google</span>
                    </button>
                  </div>

                  <p>
                    Already have an account? <a href="login"> Sign In</a>
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

export default SignUp;
