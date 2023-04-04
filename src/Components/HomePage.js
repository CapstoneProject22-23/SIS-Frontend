import React, { Profiler } from "react";
import "../CSS/HomePage.css";
import Sidebar from "./Sidebar";
import Profile from "./Profile"
import Attendance from "./Attendance"
import Results from "./Results"
import Scholarships from "./Scholarship"
import Bonafide from "./Bonafide"
import TC from "./TC"
import Test from "./Test"
import Hostel from "./Hostel"

import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home">

      {/* <div className="sideMenu">
        <Sidebar />
      </div>
      <div className="main"></div> */}
      <Router>
        <Routes>
          <Route path="/logged" element={<Sidebar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/attendance" element={<Attendance/>} />
          <Route path="/test" element={<Test/>}/>
          <Route path="/bonafide" element={<Bonafide/>}/>
          <Route path="/tc" element={<TC/>}/>
          <Route path="/results" element={<Results/>}/>
          <Route path="/hostel" element={<Hostel/>}/>
          <Route path="/scholarships" element={<Scholarships/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}
