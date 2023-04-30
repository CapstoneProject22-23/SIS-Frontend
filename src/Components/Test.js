import React from "react";
import "../CSS/Test.css"
import Popup from 'reactjs-popup';
import Test1 from "./TestResults/Test1";
import Test2 from "./TestResults/Test2";

function Test() {

  
  return (
    <div className="testmod" >
      <div className="test container">
        <h1>Test Module</h1>
        <p>To check the result of particular class test (Class Test 1/2) please press the below buttons :</p>
        <Popup
          trigger={
            
            <button id="ct1" className="btn btn-outlined-secondary">
              CT1 Result
            </button>
            
          }
          modal
          nested
        >
          {/* <div className="content">
            <Login />
          </div> */}
          {(close) => <Test1 cmd={close} />}
        </Popup>

        <Popup
          trigger={
            
            <button id="ct1" className="btn btn-outlined-secondary">
              CT2 Result
            </button>
            
          }
          modal
          nested
        >
          {/* <div className="content">
            <Login />
          </div> */}
          {(close) => <Test2 cmd={close} />}
        </Popup>
      </div>

    </div>
  );
}

export default Test;
