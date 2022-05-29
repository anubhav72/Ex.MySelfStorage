import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginAuthorisor = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  if (currentUser || currentAdmin) {
    Swal.fire({
      icon: "info",
      title: "Attention!!",
      text: "You are already loggedin",
    });
    return <Navigate to="/main/home" />;
  }

  return children;
};

export default LoginAuthorisor;
