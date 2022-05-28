import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app_config from "../../config";

const ManageBookings = () => {
  const navigate = useNavigate();

  const url = app_config.backend_url;

  const [bookings, setBookings] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/location/getbyuser/" + currentUser._id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          setBookings(data);
          setLoading(false);
          console.log(data);
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showData = () => {
    if (!loading) {
      return bookings.map((booking) => (
        <div className="col-md-3">
          <div className="card">
            <img
              src="https://shg-prd.azureedge.net/-/media/shurgard/general/unit-pictures/01dot5-tb.jpg?extension=webp&w=126&h=108&hash=CBB96A06060A707BF07B4250584BB5C8"
              alt=""
            />
            <div className="card-body">
              <p className="text-muted">Address</p>
              <h5>{booking.location.address}</h5>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">{showData()}</div>
      </div>
    </div>
  );
};

export default ManageBookings;
