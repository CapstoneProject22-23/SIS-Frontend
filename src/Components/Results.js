import React from "react";
import Popup from 'reactjs-popup';
import Upload from "../Components/Result/Upload.js"
import "../CSS/Results.css"

function Results() {
  return (
    <div className="result">
      <div className="container">
        <h1>Result Module</h1>
        <p>You can use this module as your result database. You can upload your result in any image format and then access them later.</p>
        <Popup
          trigger={
            
            <button id="ct1" className="btn btn-outlined-secondary">
              Upload Result
            </button>
            
          }
          modal
          nested
        >

          {(close) => <Upload cmd={close} />}
        </Popup>

        <button className="btn btn-outlined-secondary">Download</button>
      
      </div>
    </div>
  );
}

export default Results;
