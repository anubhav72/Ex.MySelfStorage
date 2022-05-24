import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app_config from "../../config";
import NavBar from "./navBar";
import "./resource/browselocation.css";

const BrowseLocation = () => {
  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.backend_url;
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "/location/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setDatalist(data);
          setLoading(false);
        });
      }
    });
  };

  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const displayLocations = () => {
    if (!loading) {
      return datalist.map((data) => (
        <div className="col-md">
          <div className="card">
            <div className="card-body">
              <h3>Space Available : {data.totalSpace}</h3>
              <p>{data.address}</p>

              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="container">
      <div className="main-con">
        <NavBar />
        <div className="browse-con">
          <form action="" className="browse-in-con">
            <div className="form-in">
              {" "}
              <label for="">how much space you need</label>
              <input type="text" />
            </div>
            <div className="form-in">
              <label for="">preferd location</label>
              <input type="text" />
            </div>
            <div className="form-btn">
              <button>find</button>
            </div>
          </form>

          <div className="user-con">
            <div className="user-con-1">
              <h1>Lucknow</h1>
            </div>
            <div className="user-con-2">
              <div className="div-add">
                <p>
                  Bonanza, L-65, Tej Kumar Plaza, Opposite Darulsafa,
                  Hazratganj, Hazratganj, Lucknow, Uttar Pradesh 226001
                </p>
              </div>
              <div className="div-space">
                <p>6*8 sq ft</p>
              </div>

              <div className="div-btn">
                <button>Book Space</button>
              </div>
            </div>
          </div>
          <div className="user-con">
            <div className="user-con-1">
              <h1>Lucknow</h1>
            </div>
            <div className="user-con-2">
              <div className="div-add">
                <p>
                  Bonanza, L-65, Tej Kumar Plaza, Opposite Darulsafa,
                  Hazratganj, Hazratganj, Lucknow, Uttar Pradesh 226001
                </p>
              </div>
              <div className="div-space">
                <p>6*8 sq ft</p>
              </div>

              <div className="div-btn">
                <button>Book Space</button>
              </div>
            </div>
          </div>
          <div className="user-con">
            <div className="user-con-1">
              <h1>Lucknow</h1>
            </div>
            <div className="user-con-2">
              <div className="div-add">
                <p>
                  Bonanza, L-65, Tej Kumar Plaza, Opposite Darulsafa,
                  Hazratganj, Hazratganj, Lucknow, Uttar Pradesh 226001
                </p>
              </div>
              <div className="div-space">
                <p>6*8 sq ft</p>
              </div>

              <div className="div-btn">
                <button>Book Space</button>
              </div>
            </div>
          </div>
          <div className="row mt-5">{displayLocations()}</div>
        </div>
      </div>
    </div>
  );
};

export default BrowseLocation;
