import React from "react";
import "../CSS/HomePage.css";
import Sidebar from "./Sidebar";

export default function HomePage() {
  return (
    <div className="home">
      <div className="sideMenu">
        <Sidebar />
      </div>
      <div className="main"></div>
    </div>
  );
}
