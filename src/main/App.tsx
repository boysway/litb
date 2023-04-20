import React from "react";
import Login from "../views/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Register from "../views/Register";
import Process from "../views/Process";
import VerifyEmail from "../views/VerifyEmail";
import ResetPass from "../views/Reset";
import Change from "../views/Change";
import Profile from "../views/Profile";
import Settings from "../views/Settings";
import NavOutLet from "../components/NavOutLet";
import Account from "../views/Settings/Account";
import Admin from "../views/Admin";
import Users from "../views/Admin/Users";
import Market from "../views/Market";
import Trade from "../views/Trade";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/process" element={<Process />} />
        <Route path="/email/verify" element={<VerifyEmail />} />
        <Route path="/password/reset" element={<ResetPass />} />
        <Route path="/password/change" element={<Change />} />
        <Route path="/" element={<NavOutLet />}>
          <Route path="/user" element={<Settings />}>
            <Route index element={<Profile />} />
            <Route path="/user/account" element={<Account />} />
            <Route path="/user/market" element={<Market />} />
            <Route path="/user/trade" element={<Trade />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="users" element={<Users />} />
          </Route>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
