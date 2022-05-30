import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./resource/navbar.css";
// import "./resource/nav";

const NavBar = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  const navigate = useNavigate();

  const showLogout = () => {
    if (currentUser !== null) {
      return (
        <li>
          <button
            class="mr-4 btn btn-danger"
            onClick={(e) => {
              sessionStorage.removeItem("user");
              navigate("/main/signIn");
            }}
          >
            Logout
          </button>
        </li>
      );
    } else if (currentAdmin !== null) {
      return (
        <li>
          <button
            class="mr-4 btn btn-danger"
            onClick={(e) => {
              sessionStorage.removeItem("admin");
              navigate("/main/signIn");
            }}
          >
            Logout
          </button>
        </li>
      );
    }
  };

  return (
    <>
      <nav>
        <div class="nav-head">
          <h1><NavLink to="/main/home">My SelfStorage</NavLink></h1>
        </div>
        <div class="nav-ham">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <ul class="nav-links">
          <li>
            <NavLink to="/main/home">Home</NavLink>
          </li>
          <li>
            <a href="/">Solutions</a>
          </li>
          <li>
            <NavLink to="/main/browselocation">Browse Location</NavLink>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <NavLink to="/main/signin">
              <button class="nav-in">Sign In</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/main/signup">
              <button class="nav-up" >
                Sign Up
              </button>
            </NavLink>
          </li>
          {showLogout()}
        </ul>
      </nav>
      <script src="./resource/nav.js"></script>
    </>
  );
};

export default NavBar;
