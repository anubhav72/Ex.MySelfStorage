import React from "react";
import "./resource/navbar.css";
// import "./resource/nav";

const NavBar = () => {
  return (
    <>
      <nav>
        <div class="nav-head">
          <h1>My SelfStorage</h1>
        </div>
        <div class="nav-ham">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <ul class="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Solutions</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="signin">
              <button class="nav-in" href="signin">
                Sign In
              </button>
            </a>
          </li>
          <li>
            <a href="signup">
              <button class="nav-up" href="signup">
                Sign Up
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <script src="nav.js"></script>
    </>
  );
};

export default NavBar;
