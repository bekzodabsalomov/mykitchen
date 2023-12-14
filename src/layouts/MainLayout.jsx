import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import BreadCrupms from "../components/BreadCrupms";
import ColorContainer from "../components/ColorContainer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <ColorContainer/>
      <main className="align-elements pb-8 text-lime-500">
        <BreadCrupms />
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
