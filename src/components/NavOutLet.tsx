import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/NavLink";

const NavOutLet = () => {
  return (
    <>
      <Navigation/>
      <Outlet />
    </>
  );
};

export default NavOutLet;
