import React from "react";
import Info from "./ProfileComps/Info";
import ProfilePic from "./ProfileComps/ProfilePic";
import StudentInfo from "./ProfileComps/StudentInfo";
import "../CSS/Profile.css";
function Profile() {
  return (
    <div className="student-profile py-4">
      <div className="container">
        <div className="div1">
          <div className="col-lg-8 col1">
            <ProfilePic />
          </div>
          <div className="col-lg-8 col2">
            <StudentInfo />
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
