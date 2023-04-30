import React from "react";
import "../CSS/Bonafide.css";
// import { Document, Page } from "react-pdf";
import { Await } from "react-router-dom";
// import pdf from "E:/Sem 5 data/All Documents of sem5 Available/Calculator.pdf";
export default function Bonafide() {
  const pdf = null;
  // function loadPdf() {
  //   pdf= await import ("../assets/logo.png");
  //   // pdf=await import ("E:/Sem 5 data/All Documents of sem5 Available/Calculator.pdf");
  // }
  return (
    <div className="bonafideModule">
      <center>
        <h2>Bonafide Module</h2>
      </center>
      <div className="info m-3">
        <div className="card shadow mb-3 bg-transperant">
          <div className="card-header border-0 bg-transparent ">
            <h3>Student Information</h3>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th width="30%">Name</th>
                  <td width="2%">:</td>
                  <td>Ayush </td>
                </tr>
                <tr>
                  <th width="30%">Academic Year </th>
                  <td width="2%">:</td>
                  <td>2023</td>
                </tr>
                <tr>
                  <th width="30%">Father`s name</th>
                  <td width="2%">:</td>
                  <td>Ajay waghade</td>
                </tr>
                <tr>
                  <th width="30%">Year</th>
                  <td width="2%">:</td>
                  <td>3rd</td>
                </tr>
                <tr>
                  <th width="30%">Branch</th>
                  <td width="2%">:</td>
                  <td>CO</td>
                </tr>
                <tr>
                  <th width="30%">Date of admission</th>
                  <td width="2%">:</td>
                  <td>21/12/2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="buttonsDiv m-3">
        {/* <a
          href={import(
            "E:/Sem 5 data/All Documents of sem5 Available/Calculator.pdf"
          )}
        > */}
        {/* <Document file="E:/Sem 5 data/All Documents of sem5 Available/Calculator.pdf" /> */}
        <button className="btn btn-primary ">Download Bonafide</button>
        {/* </a> */}
        <button className="btn btn-primary mx-3">View Bonafide</button>
      </div>
    </div>
  );
}
