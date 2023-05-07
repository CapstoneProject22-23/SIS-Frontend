import React, { Profiler, useState } from "react";
import "../CSS/HomePage.css";
import Sidebar from "./Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useSubmit,
} from "react-router-dom";
import Profile from "./Profile";
import Attendence from "./Attendence";
import Results from "./Results";
import Scholarship from "./Scholarship";
import Test from "./Test";
import Hostel from "./Hostel";
import TC from "./TC";
import Bonafide from "./Bonafide";
import Login from "./Login";

export default function HomePage() {
  return (
    <div className="home">
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
        </Routes>
      </Router>
    </div>
  );
}
