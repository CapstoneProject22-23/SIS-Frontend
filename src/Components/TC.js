import React, { useState } from "react";
import "../CSS/TC.css";
import Table from "./TC Components/Table";

export default function TC(props) {
  const [tcType, setTCType] = new useState("0");
  function check(v) {
    setTCType(v.target.value);
  }
  return (
    <div className="TCModule" height="100px">
      <h1>TC Module</h1>
      <div className="selectDiv">
        <label htmlFor="tcType">Select TC type</label>
        <select
          id="tcType"
          className="form-select selectType"
          aria-label="Default select example"
          onChange={check}
          defaultValue={"0"}
        >
          <option value="0">Select type</option>
          <option value="1">Single TC</option>
          <option value="2">Multiple TC</option>
        </select>
      </div>
      <div className="singleTCTable" hidden={tcType == "1" ? false : true}>
        <Table />
      </div>
      <div className="enrollRange my-3" hidden={tcType == "2" ? false : true}>
        <div className="form-floating">
          <input id="minVal" className="form-control" type="number"></input>
          <label htmlFor="minVal">Enter Starting enrollment</label>
        </div>
        <div className="form-floating my-2">
          <input id="maxVal" className="form-control" type="number"></input>
          <label htmlFor="minVal">Enter Ending enrollment</label>
        </div>
        <button className="btn btn-primary my-2">Get TC</button>
      </div>
    </div>
  );
}
