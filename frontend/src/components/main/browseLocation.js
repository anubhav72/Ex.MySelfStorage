import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app_config from "../../config";
import NavBar from "./navBar";
// import "./resource/browselocation.css";

const BrowseLocation = () => {
  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  const url = app_config.backend_url;
  const navigate = useNavigate();

  const filters = ["City", "Space", "Price"];

  const [selFilter, setSelFilter] = useState("");

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

  //   const searchProduct = e => {
  //     fetch(url + "/location/getall")
  //         .then(data => {
  //           setDatalist(data);
  //             let newList = data.filter(equipment => (equipment.name.toLowerCase().includes(keyword.toLowerCase())))
  //             console.log(newList);
  //             setEquipmentList(newList);
  //             console.log(data);
  //         });
  // }

  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const applySearch = () => {
    fetch(url + "/location/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          let filtered = 
          console.log(data);
          setDatalist(data);
          setLoading(false);
        });
      }
    });
  }

  const searchCard = () => {
    return (
      <div className="pt-5">
        <div className="card ">
          <div className="card-header bg-white p-4">
            <div class="input-group rounded">
              <input
                style={{ border: "none", outline: "none" }}
                type="search"
                class="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onChange={e => setKeyword(e.target.value)}
              />
              <span
                class="input-group-text border-0 bg-white"
                id="search-addon"
                onClick={applySearch}
              >
                <i class="fas fa-search"></i>
              </span>
            </div>
          </div>
          <div className="card-body p-4">
            <p className="text-muted">ADVANCED SEARCH</p>
            <div className="row">
              <div className="col-sm-3">
                {filters.map((name) => {
                  return (
                    <>
                      <button
                        onClick={(e) => setSelFilter(name)}
                        className={
                          "btn btn-" +
                          (name === selFilter ? "" : "outline-") +
                          "primary"
                        }
                      >
                        {name}
                      </button>
                      &nbsp; &nbsp;
                    </>
                  );
                })}
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
              <div className="col-md-3">
                <div
                  style={{
                    background:
                      "url(https://media.istockphoto.com/photos/empty-basement-room-wooden-storage-shelve-illuminated-ceiling-lamp-picture-id175419479?k=20&m=175419479&s=612x612&w=0&h=3R78o0_uUNEH8AC0ncCvrW0BhMb4sChuj-Aw2wIjt_s=)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat, repeat",
                    height: "100%",
                  }}
                ></div>
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h3>Space Available : {data.totalSpace}</h3>
                  <p>Address : {data.address}</p>
                  <p>City : {data.city}</p>
                  <p>Price : {data.price}</p>

                  <button
                    className="btn btn-primary"
                    onClick={(e) => navigate("/main/book/" + data._id)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="pt-5" style={{ background: "#ffc2ba" }}>
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
