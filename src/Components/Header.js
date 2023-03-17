import React from "react";
import "../CSS/Header.css";
import Popup from "reactjs-popup";
import Login from "./Login";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="image a">
        <img src={logo} alt="logo" />
      </div>
      <div className="name">
        <h2>
          GOVERNMENT POLYTECHNIC, KHAMGAON <br></br>Student Information System
        </h2>
      </div>
      <div>
        <Popup
          trigger={
            <button id="login" className="btn btn-primary">
              Login
            </button>
          }
          modal
          nested
        >
          {/* <div className="content">
            <Login />
          </div> */}
          {(close) => <Login cmd={close} />}
        </Popup>
      </div>
    </div>
  );
}
