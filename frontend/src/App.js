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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ManageBookings from "./components/user/manageBookings";
import LoginAuthorisor from "./components/loginAuth";
import UserProfile from "./components/user/profile";

function App() {
  const stripe = loadStripe("pk_test_51L40E8SIL78L4RMKt7EF5D080DPTTWCBmIkPCcyJiK4fKhKpG54HXnufR75qXn4WfLJAeCxGyZmIhuu0WT45HJ1300OFr7hodc");
  // const stripe = loadStripe("pk_test_Vmvhpm2TASsGcgF4RcyQfkF000KwucQJR1");
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
        >
          <Route element={<ManageBookings />} path="managebooking" />
          <Route element={<UserProfile />} path="profile" />
        </Route>
        <Route element={<Main />} path="main">
          <Route
            element={
              <LoginAuthorisor>
                <SignUp />
              </LoginAuthorisor>
            }
            path="signUp"
          />
          <Route element={<Home />} path="home" />
          <Route
            element={
              <LoginAuthorisor>
                <SignIn />
              </LoginAuthorisor>
            }
            path="signIn"
          />
          <Route element={<BrowseLocation />} path="browseLocation" />
          <Route
            element={
              <Authorisor>
                <Elements stripe={stripe}>
                  <BookLocation />
                </Elements>
              </Authorisor>
            }
            path="book/:id"
          />
          <Route element={<ResetPassword />} path="resetPassword" />
        </Route>

        <Route element={<Navigate to="/main/home" />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
