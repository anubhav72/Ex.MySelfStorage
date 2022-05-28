import React, { useEffect, useState } from "react";
import "./resource/addlocation.css";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useParams } from "react-router-dom";

export default function AddLocation() {
  const url = app_config.backend_url;

  const myValidation = Yup.object().shape({
    city: Yup.string()
      .min(1, "enter a city name")
      .max(20, "Too Long!")
      .required("city Required"),
    address: Yup.string()
      .min(5, "enter a address ")
      .max(200, "Too Long!")
      .required("Address required"),
    totalSpace: Yup.string().required("space required"),
    price: Yup.number().required("Price Required"),
  });
  return (
    <>
      <div className="main-container">
        <div className="inside-con">
          <Formik
            initialValues={{
              address: "",
              city: "",
              totalSpace: "",
              price: "",
            }}
            validationSchema={myValidation}
            onSubmit={(data) => {
              console.log(data);
              fetch(url + "/location/add", {
                method: "POST",
                body: JSON.stringify(data),
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
              <form onSubmit={handleSubmit}>
                <div className="head">
                  <h1>Add Location!</h1>
                  <p>Fill The Address , City , Space & Price</p>
                </div>
                <div className="fill">
                  <div className="name">
                    <label for="">City :</label>
                  </div>
                  <div className="main-input">
                    <input
                      name="city"
                      id="city"
                      value={values.city}
                      onChange={handleChange}
                      placeholder="Add City"
                    />
                    {errors.city && touched.city ? (
                      <div className="signup-error">{errors.city}</div>
                    ) : null}
                  </div>
                </div>
                <div className="fill">
                  <div className="name">
                    <label for="">Address :</label>
                  </div>
                  <div className="main-input">
                    <input
                      name="address"
                      id="address"
                      value={values.address}
                      onChange={handleChange}
                      placeholder="Add Address"
                    />
                    {errors.address && touched.address ? (
                      <div className="signup-error">{errors.address}</div>
                    ) : null}
                  </div>
                </div>

                <div className="fill">
                  <div className="name">
                    <label for="">Space :</label>
                  </div>
                  <div className="main-input">
                    <input
                      name="totalSpace"
                      id="totalSpace"
                      value={values.totalSpace}
                      onChange={handleChange}
                      placeholder="Add Space"
                    />
                    {errors.totalSpace && touched.totalSpace ? (
                      <div className="signup-error">{errors.totalSpace}</div>
                    ) : null}
                  </div>
                </div>
                <div className="fill">
                  <div className="name">
                    <label for="">Price :</label>
                  </div>
                  <div className="main-input">
                    <input
                      name="price"
                      id="price"
                      value={values.price}
                      onChange={handleChange}
                      placeholder="Add Price"
                    />
                    {errors.price && touched.price ? (
                      <div className="signup-error">{errors.price}</div>
                    ) : null}
                  </div>
                </div>

                <div className="btn">
                  <button type="submit">Add Location</button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
