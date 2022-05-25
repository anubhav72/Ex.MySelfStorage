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

const ManageLocations = () => {
  const url = app_config.backend_url;
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showupdateLocationForm, setShowupdateLocationForm] = useState(false);
  const [userFormData, setUserFormData] = useState({});

  const fetchLocationData = () => {
    fetch(url + "/location/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserList(data);
        setLoading(false);
      });
  };

  const deleteLocation = (id) => {
    fetch(url + "/user/delete/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        fetchLocationData();
        toast("User Deleted!", {
          icon: "💀",
        });
      }
    });
  };

  const updateLocation = (formdata) => {
    console.log(formdata);
  };

  const updateLocationForm = () => {
    if (showupdateLocationForm) {
      return (
        <Formik initialValues={userFormData} onSubmit={updateLocation}>
          {({ values, handleSubmit, handleChange, errors }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                className="mt-3"
                label="state"
                type="text"
                variant="outlined"
                id="state"
                value={values.state}
                onChange={handleChange}
                helperText={errors.city}
                error={Boolean(errors.city)}
              />
              <TextField
                className="mt-3"
                label="address"
                variant="outlined"
                id="address"
                value={values.address}
                onChange={handleChange}
                helperText={errors.address}
                error={Boolean(errors.address)}
              />
              <TextField
                className="mt-3"
                label="totalSpace"
                type="number"
                variant="outlined"
                id="totalSpace"
                value={values.totalSpace}
                onChange={handleChange}
                helperText={errors.totalSpace}
                error={Boolean(errors.totalSpace)}
              />

              <TextField
                className="mt-3"
                label="price"
                type="price"
                variant="outlined"
                id="price"
                value={values.price}
                onChange={handleChange}
                helperText={errors.price}
                error={Boolean(errors.price)}
              />
              <TextField
                className="mt-3"
                label="createdAt"
                type="string"
                variant="outlined"
                id="createdAt"
                value={values.createdAt}
                onChange={handleChange}
                helperText={errors.createdAt}
                error={Boolean(errors.createdAt)}
              />

              <Button type="submit" className="mt-3" variant="contained">
                Update User
              </Button>
              <Button
                onClick={(e) => setShowupdateLocationForm(false)}
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

  const displayLocationData = () => {
    if (!loading) {
      return userList.map(
        ({ createdAt,  city, address, totalSpace, price, _id }) => (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              {city}
            </AccordionSummary>
            <AccordionDetails>
              <h5>City : {city}</h5>
              <h5>Address : {address}</h5>
              <h5>Totalspace : {totalSpace}</h5>
              <h5>Price : {price}</h5>
              
              <h5>Added On : {createdAt}</h5>

              <Fab
                onClick={(e) => deleteLocation(_id)}
                size="small"
                color="secondary"
                sx={{ mt: 5 }}
              >
                <Delete />
              </Fab>
              <Fab
                onClick={(e) => {
                  setShowupdateLocationForm(true);
                  setUserFormData({
                    city,
                    address,
                    totalSpace,
                    price,
                    createdAt,
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
    fetchLocationData();
  }, []);

  return (
    <Container>
      <h1>Manage Location</h1>
      <hr />
      {displayLocationData()}
      {updateLocationForm()}
    </Container>
  );
};

export default ManageLocations;
