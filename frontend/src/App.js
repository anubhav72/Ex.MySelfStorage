
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/main/login";
import Admin from "./components/admin";
import User from "./components/user";
import Main from "./components/main";
import Dashboard from "./components/admin/dashboard";
import Profile from "./components/admin/profile";
import SignUp from "./components/main/signUp";


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
        <Route element={<Login />} path="login"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
