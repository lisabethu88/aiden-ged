import "./App.css";
import React from "react";
// Outlet => render the root list routes
import { Outlet } from "react-router-dom";
// import Footer from "./components/Footer";
import Header from "./Components/Header.jsx";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
export default RootLayout;
