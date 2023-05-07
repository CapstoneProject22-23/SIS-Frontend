import React, { useState } from "react";
import Header from "./Header";
import "../CSS/Login.css";
import { Link } from "react-router-dom";
export default function Login(props) {
  const [userType, setUserType] = useState("none");

  function Login1() {
    let btn = document.getElementById("login");

    if (btn.innerHTML === "Login") btn.innerHTML = "Logout";
  }
  return (
    <div className="loginForm">
      <form className="container">
        <div className="logBtn">
          <i className="bi bi-x-circle-fill" onClick={() => props.cmd()}></i>
          <h3>Login</h3>
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => {
              setUserType(event.target.value);
            }}
          >
            <option default>Select user type</option>
            <option value="admin">Admin</option>
            <option value="principal">Principal</option>
            <option value="hod">Head of Department</option>
            <option value="staff">Faculty/Staff</option>
          </select>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enrollment No
          </label>
          <input
            type="text"
            className="form-control"
            id="enrollmentNo"
            aria-describedby="enroll"
          />
          <div id="enroll" className="form-text">
            We'll never share your details with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <a className="btn btn-primary" href="/home/profile" onClick={Login1}>
          Submit
        </a>
      </form>
    </div>
  );
}
