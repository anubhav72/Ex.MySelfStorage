import { Formik } from "formik";
import React from "react";
import "./login.css";
import google from "./resource/google.png";
import mobile from "./resource/mobile.png";
import Swal from "sweetalert2";
import * as Yup from "yup";
const SignUp = () => {
    const signUpForm={
        username:"",
        email:"",
        phone:"",
        password:"",
    };
    // 2. create a function for form submission
    const userSubmit = (formdata) => {
        console.log(formdata);
    
        // 1. Address
        // 2. Request method
        // 3. Data
        // 4. Data Format
    
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
      };
      //   4. Create Validation Schema

  const myValidation = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Enter Email"),
    password: Yup.string().min(3, "Too Short!!").required("Password Required"),
  });
  return (
    <>
      <Formik initialValues={signUpForm} onSubmit={userSubmit} validationSchema={myValidation}>
        {({ values, handleChange, handleSubmit }) => (
          <div className="container">
            <div className="one-sub-con">
              <img src={mobile} alt="" />
              <div className="account">
                <h1>Cerate a new Account</h1>
              </div>
            </div>
            <div className="two-sub-con">
              <form onSubmit={handleSubmit} action="">
                <div className="main-head">
                  <h1>Sign Up</h1>
                  <p>Let's set up your personal account</p>

                  <input type="name" value={values.username} onChange={handleChange} placeholder="UserName" />
                  <input type="email" value={values.email} onChange={handleChange} placeholder="Email" />
                  <input type="phone" value={values.phone} onChange={handleChange} placeholder="Phone No" />
                  <input type="password" value={values.password} onChange={handleChange} placeholder="Password" />
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
                    Already have an account? <a href="&"> Sign In</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
