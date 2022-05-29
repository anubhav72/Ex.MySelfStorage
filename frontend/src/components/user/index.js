import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navBar";

const User = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default User;
