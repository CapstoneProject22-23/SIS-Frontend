import React, { useState } from "react";
import "../CSS/Sidebar.css";
import { Link } from "react-router-dom";
export default function Sidebar(props) {
  const [selected, setSelected] = new useState("btn1");
  const clicked = () => {
    var id = window.event.target.id;
    setSelected(id);
  };
  return (
    <div className="sidebar">
<<<<<<< Updated upstream
      <Link to="/profile"
        className={selected === "btn1" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn1"
      >
        Profile
      </Link>
      <Link to="/attendance"
        className={selected === "btn2" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn2"
      >
        Attendence
      </Link>
      <Link to="/bonafide"
        className={selected === "btn3" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn3"
      >
        Bonafide
      </Link>
      <Link to="/tc"
        className={selected === "btn4" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn4"
      >
        TC application
      </Link>
      <Link to="/scholarships"
        className={selected === "btn5" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn5"
      >
        Scholarships
      </Link>
      <Link to="/results"
        className={selected === "btn6" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn6"
      >
        Results
      </Link>
      <Link to="/test"
        className={selected === "btn7" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn7"
      >
        Test marks
      </Link>
      <Link to="/hostel"
        className={selected === "btn8" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn8"
      >
        Hostel application
=======
      <Link to="/home/profile">
        <button
          className={
            selected === "btn1" ? "btn btn-selected" : "btn btn-primary"
          }
          onClick={clicked}
          id="btn1"
        >
          Profile
        </button>
      </Link>
      <Link to="/home/attendence">
        <button
          className={
            selected === "btn2" ? "btn btn-selected" : "btn btn-primary"
          }
          onClick={clicked}
          id="btn2"
        >
          Attendence
        </button>
      </Link>
      <Link to="/home/bonafide">
        <button
          className={
            selected === "btn3" ? "btn btn-selected" : "btn btn-primary"
          }
          onClick={clicked}
          id="btn3"
        >
          Bonafide
        </button>
      </Link>
      <Link to="/home/tc">
        <button
          className={
            selected === "btn4" ? "btn btn-selected" : "btn btn-primary"
          }
          onClick={clicked}
          id="btn4"
        >
          TC application
        </button>
      </Link>
      <Link to="/home/scholarship">
        <button
          className={
            selected === "btn5" ? "btn btn-selected" : "btn btn-primary"
          }
          onClick={clicked}
          id="btn5"
        >
          Scholarships
        </button>
      </Link>
      <Link to="/home/results">
        <button
          className={
            selected === "btn6" ? "btn btn-selected" : "btn btn-primary"
          }
          onClick={clicked}
          id="btn6"
        >
          Results
        </button>
      </Link>
      <Link to="/home/test">
        <button
          className={
            selected === "btn7" ? "btn btn-selected" : "btn btn-primary"
          }
          onClick={clicked}
          id="btn7"
        >
          Test marks
        </button>
      </Link>
      <Link to="/home/hostel">
        <button
          className={
            selected === "btn8" ? "btn btn-selected" : "btn btn-primary"
          }
          onClick={clicked}
          id="btn8"
        >
          Hostel application
        </button>
>>>>>>> Stashed changes
      </Link>
    </div>
  );
}
