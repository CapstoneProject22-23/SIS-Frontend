import React, { Profiler } from "react";
import "../CSS/HomePage.css";
import Sidebar from "./Sidebar";
<<<<<<< Updated upstream
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
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Attendence from "./Attendence";
import Results from "./Results";
import Scholarship from "./Scholarship";
import Test from "./Test";
import Hostel from "./Hostel";
import TC from "./TC";
import Bonafide from "./Bonafide";
>>>>>>> Stashed changes

export default function HomePage() {
  return (
    <div className="home">
<<<<<<< Updated upstream

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
          
=======
      <Router>
        <Routes>
          <Route
            path="/home/profile"
            element={
              <>
                <Sidebar />
                <Profile />
              </>
            }
          />
          <Route
            path="/home/attendence"
            element={
              <>
                <Sidebar />
                <Attendence />
              </>
            }
          />
          <Route
            path="/home/results"
            element={
              <>
                <Sidebar />
                <Results />
              </>
            }
          />
          <Route
            path="/home/tc"
            element={
              <>
                <Sidebar />
                <TC />
              </>
            }
          />
          <Route
            path="/home/scholarship"
            element={
              <>
                <Sidebar />
                <Scholarship />
              </>
            }
          />
          <Route
            path="/home/test"
            element={
              <>
                <Sidebar />
                <Test />
              </>
            }
          />
          <Route
            path="/home/hostel"
            element={
              <>
                <Sidebar />
                <Hostel />
              </>
            }
          />
          <Route
            path="/home/bonafide"
            element={
              <>
                <Sidebar />
                <Bonafide />
              </>
            }
          />
>>>>>>> Stashed changes
        </Routes>
      </Router>
    </div>
  );
}
