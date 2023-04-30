import React from 'react'
import "../../CSS/Upload.css"

export default function Upload() {
    return (
        <div className='upload'>
            <div className='container'>
                <h5>Upload Result</h5>
                <select class="form-select form-select-sm" aria-label="Default select example">
                    <option value="1">Summer</option>
                    <option value="2">Winter</option>
                </select>
                <select class="form-select form-select-sm" aria-label="Default select example">
                    <option value="1">2023</option>
                    <option value="2">2024</option>
                    <option value="3">2025</option>
                    <option value="4">2026</option>
                    <option value="5">2027</option>
                    <option value="6">2028</option>
                    <option value="7">2029</option>
                    <option value="8">2030</option>
                    <option value="9">2031</option>
                    <option value="10">2032</option>

                </select>
                <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile01" />
                </div>

                <center><button className='btn btn-light'>Upload</button></center>
            </div>
        </div>
    )
}
