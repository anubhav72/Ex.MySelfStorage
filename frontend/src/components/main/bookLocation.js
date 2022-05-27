import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import app_config from "../../config";
import "./resource/book.css";
const BookLocation = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [locData, setLocData] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = app_config.backend_url;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const fetchData = () => {
    fetch(url + "/slide/getbyid/" + id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setLocData(data);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <div className="container" style={{ paddingTop: "10rem" }}>
        <div className="card">
          <div className="card-header">
            <h3 className="mb-0">Booking Summary</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div class="t-sec">
                  <div class="t-3-sec">
                    <label for="">Starting Date</label>
                    <input type="date" />
                  </div>
                  <div class="t-3-sec">
                    <label for="">Ending Date</label>
                    <input type="date" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div class="book-sub-1">
                  <h3>
                    City : <span> Lucknow</span>
                  </h3>
                  <h3>
                    Address :{" "}
                    <span>
                      Pratibha Jewellers, RWWV+PRW, Near Basant Cinema,
                      Sushanpura, Hazratganj, Lucknow, Uttar Pradesh 226001
                    </span>
                  </h3>
                  <h3>
                    Space : <span>6 * 4 sqft</span>
                  </h3>
                  <h3>
                    Date : <span>Lucknow</span>
                  </h3>
                  <h3>
                    total Price : <span>500 rs</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default BookLocation;
