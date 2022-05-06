
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/main/signIn";
import SignUp from "./components/main/signUp";
// import ResetPassword from "./components/main/resetPassword";
import Admin from "./components/admin";
import User from "./components/user";
import Main from "./components/main";
import Dashboard from "./components/admin/dashboard";
import Profile from "./components/admin/profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Admin />} path="admin">
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<Profile />} path="profile" />
        </Route>
        <Route element={<User />} path="user"></Route>
        <Route element={<Main />} path="main">
        </Route>
        <Route element={<SignUp />} path="signUp"/>
        <Route element={<SignIn />} path="signIn"/>
        {/* <Route element={<ResetPassword />} path="resetPassword"/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
