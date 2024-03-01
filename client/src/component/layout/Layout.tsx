import React from "react";
import { NavBar } from "../navbar/NavBar";
import NavBar2 from "../navbar/NavBar2";
import NavBar3 from "../navbar/NavBar3";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <NavBar2 city="Ottawa" />
      <NavBar3 />
      <Outlet />
    </div>
  );
};
