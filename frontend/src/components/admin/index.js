import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import { AccountCircle, Dashboard , } from "@mui/icons-material";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

const Admin = () => {
  const sidebarOptions = [
    {
      name: "Manage Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
    },
    {
      name: "Dashboard",
      icon: <Dashboard />,
      link: "/admin/dashboard",
    },
    {
      name: "addLocation",
      icon: < AddLocationAltIcon/>,
      link: "/admin/addLocation",
    },
    {
      name: "manageUser",
      icon: <ManageAccountsIcon />,
      link: "/admin/manageUser",
    },
  ];

  return (
    <div>
      <h1>Admin</h1>
      <Sidebar sidebarOptions={sidebarOptions} title="Admin Dashboard">
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default Admin;
