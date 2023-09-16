import React from "react";

function TeacherInfo() {
  return (
    <div className="card shadow mb-3 bg-transperant">
      <div className="card-header border-0 bg-transparent ">
        <h3>General Information</h3>
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th width="30%">Joining Year</th>
              <td width="2%">:</td>
              <td></td>
            </tr>
            <tr>
              <th width="30%">Mobile No </th>
              <td width="2%">:</td>
              <td></td>
            </tr>
            <tr>
              <th width="30%"></th>
              <td width="2%">:</td>
              <td>6th semester</td>
            </tr>
            <tr>
              <th width="30%">Gender</th>
              <td width="2%">:</td>
              <td></td>
            </tr>
            <tr>
              <th width="30%">Faculty Type</th>
              <td width="2%">:</td>
              <td></td>
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

export default TeacherInfo;
