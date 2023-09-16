import React from "react";
import pic from "../../assets/profile.jpg";
import "../../CSS/Profile.css";
function TeacherProfilePic() {
  return (
    <div className="card shadow-sm mx-1 divprofile">
      <div className="card-header bg-transparent text-center">
        <img className="profile_img" src={pic} alt="progile pic" />
        <h3>Name</h3>
      </div>
      <div className="card-body">
        <p className="mb-0">
          <strong className="pr-1">Teacher Id</strong>
        </p>
        <p className="mb-0">
          <strong className="pr-1">Branch:</strong>Computer Engineering
        </p>
      </div>
    </div>
  );
}

export default TeacherProfilePic;
