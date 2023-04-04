import React from "react";

function StudentInfo() {
  return (
    <div className="card shadow mb-3">
      <div className="card-header border-0">
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
              <th width="30%">Mobile No.</th>
              <td width="2%">:</td>
              <td>9322152765</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentInfo;
