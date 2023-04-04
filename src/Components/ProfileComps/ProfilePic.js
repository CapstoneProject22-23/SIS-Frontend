import React from "react";
import pic from "../../assets/profile.jpg";
import "../../CSS/Profile.css";
function ProfilePic() {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-transparent text-center">
        <img className="profile_img" src={pic} alt="progile pic" />
        <h3>Name</h3>
      </div>
      <div className="card-body">
        <p className="mb-0">
          <strong className="pr-1">Enrollment No:</strong>2000210453
        </p>
        <p className="mb-0">
          <strong className="pr-1">Branch:</strong>Computer Engineering
        </p>
        <p className="mb-0">
          <strong className="pr-1">Year:</strong>3rd year
        </p>
      </div>
    </div>
  );
}

export default ProfilePic;
