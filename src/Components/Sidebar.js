import React, { useState } from "react";
import "../CSS/Sidebar.css";
export default function Sidebar(props) {
  const [selected, setSelected] = new useState("btn1");
  const clicked = () => {
    var id = window.event.target.id;
    setSelected(id);
  };
  return (
    <div className="sidebar">
      <button
        className={selected === "btn1" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn1"
      >
        Profile
      </button>
      <button
        className={selected === "btn2" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn2"
      >
        Attendence
      </button>
      <button
        className={selected === "btn3" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn3"
      >
        Bonafide
      </button>
      <button
        className={selected === "btn4" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn4"
      >
        TC application
      </button>
      <button
        className={selected === "btn5" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn5"
      >
        Scholarships
      </button>
      <button
        className={selected === "btn6" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn6"
      >
        Results
      </button>
      <button
        className={selected === "btn7" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn7"
      >
        Test marks
      </button>
      <button
        className={selected === "btn8" ? "btn btn-selected" : "btn btn-primary"}
        onClick={clicked}
        id="btn8"
      >
        Hostel application
      </button>
    </div>
  );
}
