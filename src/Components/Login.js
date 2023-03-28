import React from "react";
import "../CSS/Login.css";
export default function Login(props) {
  return (
    <div className="loginForm">
      <form className="container">
        <div className="logBtn">
          <i className="bi bi-x-circle-fill" onClick={() => props.cmd()}></i>
          <h3>Login</h3>
        </div>
        <div className="mb-3">
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
