import React from 'react';

const App = () => {
  return (
    <div>
      <table>
        <caption>Breakdown Log</caption>
        <br/>
        <tr>
      <th>S.No 
        <br/>
        <select id="serial-number">
        <option value= "01">01</option>
        <option value= "02">02</option>
        <option value= "03">03</option>
        <option value= "04">04</option>
        <option value= "05">05</option>
        <option value= "06">06</option>
        <option value= "07">07</option>
        <option value= "08">08</option>
        <option value= "09">09</option>
        <option value= "10">10</option>
        
        </select>
        </th>
      <th>Date 
        <br/>
      <select id="Date">
      <option value= "01 June 2024">01 June 2024</option>
      <option value= "02 June 2024">02 June 2024</option>
      <option value= "03 June 2024">03 June 2024</option>
      <option value= "04 June 2024">04 June 2024</option>
      <option value= "05 June 2024">05 June 2024</option>
      <option value= "06 June 2024">06 June 2024</option>
      <option value= "07 June 2024">07 June 2024</option>
      <option value= "08 June 2024">08 June 2024</option>
      <option value= "09 June 2024">09 June 2024</option>
      <option value= "10 June 2024">10 June 2024</option>
      
      
        
        
        </select>
      </th>
      <th>Department</th>
      <th>Operator Name</th>
      <th>Machine No</th>
      <th>Fault Description</th>
      <th>Fault Time</th>
      <th>Start Time</th>
      <th>End Time</th>
      <th>Repair Time</th>
      <th>Breakdown Time</th>
      <th>Part Status</th>
      <th>Part Code</th>
      <th>Part Code 2</th>
      <th>Part Code 3</th>
      <th>Part Code 4</th>
      <th>Quantity (pcs)</th>
      <th>Issued to</th>
      <th>Issued by</th>
      <th>Remarks</th>
      </tr>  
      <tr>
        <td></td>
      </tr>
      </table>    
       </div>
  )
}

export default BreakdownLog;

