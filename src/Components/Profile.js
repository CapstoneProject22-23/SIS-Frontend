import React, { useState } from "react";
import Info from "./ProfileComps/Info";
import ProfilePic from "./ProfileComps/ProfilePic";
import StudentInfo from "./ProfileComps/StudentInfo";
import TeacherProfilePic from "./TeacherProfileComp/TeacherProfilePic";
import TeacherInfo from "./TeacherProfileComp/TeacherInfo";
import "../CSS/Profile.css";
function Profile(props) {
  var [userType, setUserType] = useState("faculty");
  return (
    <div className="student-profile py-4">
      <div className="container">
        <div className="student text-center text-white m-2 px-3">
          {userType == "student" ? (
            <h1>Student Details</h1>
          ) : (
            <h1>Faculty profile</h1>
          )}
        </div>
        <div className="div1">
          <div className="col-lg-8 col1">
            {userType == "student" ? <ProfilePic /> : <TeacherProfilePic />}
          </div>
          <div className="col-lg-8 col2">
            {userType == "student" ? (
              <>
                <StudentInfo />
                <Info />
              </>
            ) : (
              <TeacherInfo />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
