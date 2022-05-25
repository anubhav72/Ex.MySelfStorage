import { Delete, Edit, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Fab,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import app_config from "../../config";

const ManageUsers = () => {
  const url = app_config.backend_url;
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [userFormData, setUserFormData] = useState({});

  const fetchUserData = () => {
    fetch(url + "/user/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserList(data);
        setLoading(false);
      });
  };

  const deleteUser = (id) => {
    fetch(url + "/user/delete/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        fetchUserData();
        toast("User Deleted!", {
          icon: "💀",
        });
      }
    });
  };

  const updateUser = (formdata) => {
    console.log(formdata);
  };

  const updateForm = () => {
    if (showUpdateForm) {
      return (
        <Formik initialValues={userFormData} onSubmit={updateUser}>
          {({ values, handleSubmit, handleChange, errors }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                className="mt-3"
                label="Username"
                type="text"
                variant="outlined"
                id="username"
                value={values.username}
                onChange={handleChange}
                helperText={errors.username}
                error={Boolean(errors.username)}
              />
              <TextField
                className="mt-3"
                label="Email Address"
                variant="outlined"
                id="email"
                value={values.email}
                onChange={handleChange}
                helperText={errors.email}
                error={Boolean(errors.email)}
              />
              <TextField
                className="mt-3"
                label="mobile"
                type="number"
                variant="outlined"
                id="mobile"
                value={values.mobile}
                onChange={handleChange}
                helperText={errors.mobile}
                error={Boolean(errors.mobile)}
              />

              <TextField
                className="mt-3"
                label="Password"
                type="password"
                variant="outlined"
                id="password"
                value={values.password}
                onChange={handleChange}
                helperText={errors.password}
                error={Boolean(errors.password)}
              />
            
              
              
              <Button type="submit" className="mt-3" variant="contained">
                Update User
              </Button>
              <Button
                onClick={(e) => setShowUpdateForm(false)}
                className="mt-3"
                variant="contained"
                color="error"
              >
                Cancel
              </Button>
            </form>
          )}
        </Formik>
      );
    }
  };

  const displayUserData = () => {
    if (!loading) {
      return userList.map(
        ({  createdAt, username, password, email, mobile, _id }) => (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              {username}
            </AccordionSummary>
            <AccordionDetails>

              <h5>Username : {username}</h5>
              <h5>Email : {email}</h5>
              <h5>Mobile No : {mobile}</h5>
              <h5>Password : {password}</h5>
              <h5>Added On : {createdAt}</h5>

              <Fab
                onClick={(e) => deleteUser(_id)}
                size="small"
                color="secondary"
                sx={{ mt: 5 }}
              >
                <Delete />
              </Fab>
              <Fab
                onClick={(e) => {
                  setShowUpdateForm(true);
                  setUserFormData({
                    username,
                    createdAt,
                    password,
                    email,
                    mobile,
                    _id,
                  });
                }}
                size="small"
                color="success"
                sx={{ mt: 5, ml: 3 }}
              >
                <Edit />
              </Fab>
            </AccordionDetails>
          </Accordion>
        )
      );
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Container>
      <h1>Manage Users</h1>
      <hr />
      {displayUserData()}
      {updateForm()}
    </Container>
  );
};

export default ManageUsers;
