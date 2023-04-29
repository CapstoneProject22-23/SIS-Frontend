import React from "react";

function StudentInfo() {
  return (
    <div className="card shadow mb-3 bg-transperant">
      <div className="card-header border-0 bg-transparent ">
        <h3>General Information</h3>
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th width="30%">Roll</th>
              <td width="2%">:</td>
              <td>68</td>
            </tr>
            <tr>
              <th width="30%">Academic Year </th>
              <td width="2%">:</td>
              <td>2023</td>
            </tr>
            <tr>
              <th width="30%">Semester:</th>
              <td width="2%">:</td>
              <td>6th semester</td>
            </tr>
            <tr>
              <th width="30%">Gender</th>
              <td width="2%">:</td>
              <td>Male</td>
            </tr>
            <tr>
              <th width="30%">Category</th>
              <td width="2%">:</td>
              <td>OBC</td>
            </tr>
            <tr>
              <th width="30%">TFWS</th>
              <td width="2%">:</td>
              <td>Yes</td>
            </tr>
            <tr>
              <th width="30%">EWS</th>
              <td width="2%">:</td>
              <td>NO</td>
            </tr>
            <tr>
              <th width="30%">Residential address</th>
              <td width="2%">:</td>
              <td>Dalfail chobe layout khamgaon 444303</td>
            </tr>
            <tr>
              <th width="30%">District</th>
              <td width="2%">:</td>
              <td>Buldhana</td>
            </tr>
            <tr>
              <th width="30%">City</th>
              <td width="2%">:</td>
              <td>Khamgaon</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentInfo;
