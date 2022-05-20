import React from "react";
import "./resource/addlocation.css";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";

export default function AddLocation() {
    const url = app_config.backend_url;
  return (
    <>
      <div className="main-container">
        <div className="inside-con">
          <Formik
            initialValues={{
              state: "",
              city: "",
              space: "",
              price: "",
            }}
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
            {({ values, handleSubmit, handleChange, errors, touched })=>(

                <form onSubmit={handleSubmit}>
              <div className="head">
                <h1>Add Location!</h1>
                <p>Fill The State , City , Space & Price</p>
              </div>
              <div className="fill">
                <div className="name">
                  <label for="">State :</label>
                </div>
                <div className="main-input">
                  <input name="state"
                    id="state"
                    value={values.state}
                    onChange={handleChange}placeholder="Add State" />
                </div>
              </div>

              <div className="fill">
                <div className="name">
                  <label for="">City :</label>
                </div>
                <div className="main-input">
                  <input name="city"
                    id="city"
                    value={values.city}
                    onChange={handleChange} placeholder="Add City" />
                </div>
              </div>

              <div className="fill">
                <div className="name">
                  <label for="">Space :</label>
                </div>
                <div className="main-input">
                  <input name="space"
                    id="space"
                    value={values.space}
                    onChange={handleChange} placeholder="Add Space" />
                </div>
              </div>
              <div className="fill">
                <div className="name">
                  <label for="">Price :</label>
                </div>
                <div className="main-input">
                  <input name="price"
                    id="price"
                    value={values.price}
                    onChange={handleChange} placeholder="Add Price" />
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
