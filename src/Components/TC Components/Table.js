import React from "react";

function Table() {
  return (
    <div className="table1">
      <div
        className="card shadow mb-3 bg-transperant my-4 TCinfo"
        width="100px"
      >
        <div className="card-header border-0 bg-transparent ">
          <h3></h3>
        </div>
        <div className="card-body">
          <table className="table table-bordered ">
            <tbody>
              <tr>
                <th width="30%">Student`s name</th>
                <td width="2%">:</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <th width="30%">Mother`s name</th>
                <td width="2%">:</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <th width="30%">Religion</th>
                <td width="2%">:</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <th width="30%">Caste</th>
                <td width="2%">:</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <th width="30%">Nationality</th>
                <td width="2%">:</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <th width="30%">Birth place</th>
                <td width="2%">:</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <th width="30%">Date of birth</th>
                <td width="2%">:</td>
                <td>
                  <input type="date" className="form-control" />
                </td>
              </tr>
              <tr>
                <th width="30%">Date of birth (Textual)</th>
                <td width="2%">:</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <th width="30%">Previous School</th>
                <td width="2%">:</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <th width="30%">Date of admission</th>
                <td width="2%">:</td>
                <td>
                  <input type="date" className="form-control" />
                </td>
              </tr>
              <tr>
                <th width="30%">Reason of leaving institute</th>
                <td width="2%">:</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <th width="30%">Performance</th>
                <td width="2%">:</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <th width="30%">Remarks</th>
                <td width="2%">:</td>
                <td>
                  <textarea className="form-control" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button className="btn btn-primary printBtn">Print TC</button>
    </div>
  );
}

export default Table;
