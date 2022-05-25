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

  const searchCard = () => {
    return (
      <div className="">
        <div className="card">
          <div className="card-header bg-white p-4">
            <div class="input-group rounded">
              <input
                style={{ border: "none", outline: "none" }}
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span
                class="input-group-text border-0 bg-white"
                id="search-addon"
              >
                <i class="fas fa-search"></i>
              </span>
            </div>
          </div>
          <div className="card-body p-4">
            <p className="text-muted">ADVANCED SEARCH</p>
            <div className="row">
              <div className="col-sm-3">
                <button className="btn btn-outline-primary">City</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const displayLocations = () => {
    if (!loading) {
      return datalist.map((data) => (
        <div className="">
          <div className="card mt-5">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3>Space Available : {data.totalSpace}</h3>
                  <p>{data.address}</p>

                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="pt-5" style={{ background: "#eee" }}>
      <div className="container">
        {/* <NavBar /> */}
        {/* <div className="browse-con">
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
        </div> */}
        {searchCard()}
        <div className="">{displayLocations()}</div>
      </div>
    </div>
  );
};

export default BrowseLocation;
