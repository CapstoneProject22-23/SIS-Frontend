import React from "react";
import "../CSS/Test.css"
function Test() {

  function ct1Result(params) {
    
  }
  return (
    <div className="testmod" >
      <div className="test container">
      <h1>Test Module</h1>
      <p>To check the result of particular class test (Class Test 1/2) please press the below buttons :</p>
      <button className="btn btn-outlined-secondary" onClick={ct1Result}>CT1 Result</button>
      <button className="btn btn-outlined-secondary">CT2 Result</button>
      </div>
      
    </div>
  );
}

export default Test;
