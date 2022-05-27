import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./components/main/signIn";
import SignUp from "./components/main/signUp";
import ResetPassword from "./components/main/resetPassword";
import Admin from "./components/admin";
import User from "./components/user";
import Main from "./components/main";
import Dashboard from "./components/admin/dashboard";
import Profile from "./components/admin/profile";
import AddLocation from "./components/admin/addLocation";

// import Header from "./components/main/header";
// import NavBar from "./components/main/navBar";
import BrowseLocation from "./components/main/browseLocation";
import Home from "./components/main/home";
import ManageUsers from "./components/admin/manageUser";
import ManageLocations from "./components/admin/manageLocation";
import BookingSpace from "./components/main/bookingSpace";
import AdminAuthorisor from "./components/adminAuth";
import Authorisor from "./components/authenticator";
import BookLocation from "./components/main/bookLocation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AdminAuthorisor>
              <Admin />
            </AdminAuthorisor>
          }
          path="admin"
        >
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<Profile />} path="profile" />
          <Route element={<AddLocation />} path="addLocation" />
          {/* <Route element={<ManageLoca />} path="managelocation" /> */}
          <Route element={<ManageUsers />} path="manageUser" />
          <Route element={<ManageLocations />} path="manageLocation" />
        </Route>

        <Route
          element={
            <Authorisor>
              <User />
            </Authorisor>
          }
          path="user"
        ></Route>
        <Route element={<Main />} path="main">
          <Route element={<SignUp />} path="signUp" />
          <Route element={<Home />} path="home" />
          <Route element={<SignIn />} path="signIn" />
          <Route element={<BrowseLocation />} path="browseLocation" />
          <Route element={<BookLocation />} path="book/:id" />
          <Route element={<ResetPassword />} path="resetPassword" />
        </Route>

        <Route element={<Navigate to="/main/home" />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
