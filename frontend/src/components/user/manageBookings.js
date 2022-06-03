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
    fetch(url + "/booking/getbyuser/" + currentUser._id).then((res) => {
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
              src="https://media.istockphoto.com/photos/empty-basement-room-wooden-storage-shelve-illuminated-ceiling-lamp-picture-id175419479?k=20&m=175419479&s=612x612&w=0&h=3R78o0_uUNEH8AC0ncCvrW0BhMb4sChuj-Aw2wIjt_s="
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
        <h1 className="mt-5">Manage Bookings</h1>
        <hr />
        <div className="row">{showData()}</div>
      </div>
    </div>
  );
};

export default ManageBookings;
