import React from 'react'
import Popup from 'reactjs-popup';
import "../../CSS/Test1.css"

export default function Test1() {
    return (
        <>
            <div className='test1 container'>
                <h5><b> Class test 1 Result</b></h5>
                <table class="table table-striped-columns">
                    <tr>
                        <th>Subject</th>
                        <th>Marks out of 20</th>
                    </tr>
                    <tr>
                        <td>Subject 1</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Subject 2</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Subject 3</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Subject 4</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Subject 5</td>
                        <td>20</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
