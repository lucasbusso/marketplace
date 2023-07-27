import React from "react";
import { NavBar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const RouterLayout: React.FC<object> = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
