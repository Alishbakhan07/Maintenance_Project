// import React, { useState, useEffect } from "react";
// import * as XLSX from "xlsx";

// const convertExcelDate = (excelSerial) => {
//   const excelStartDate = new Date(1899, 11, 30);
//   const date = new Date(excelStartDate.getTime() + excelSerial * 86400000);

//   const day = date.getDate();
//   const monthNames = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   const month = monthNames[date.getMonth()];
//   const year = date.getFullYear();

//   return `${day}-${month}-${year}`;
// };

// const PreventiveMaintenanceLog = () => {
//   const [dates, setDates] = useState([]);

//   useEffect(() => {
//     fetch("/validation.xlsx")
//       .then((response) => response.arrayBuffer())
//       .then((buffer) => {
//         const workbook = XLSX.read(buffer, { type: "array" });
//         const worksheet = workbook.Sheets["Validation (2)"];

//         let jsonData = XLSX.utils.sheet_to_json(worksheet);

//         // Convert the date field and extract only the date
//         const extractedDates = jsonData.map((item) =>
//           convertExcelDate(item.Date)
//         );

//         setDates(extractedDates);
//       })
//       .catch((error) =>
//         console.error("Error fetching or parsing Excel file:", error)
//       );
//   }, []);

//   return (
//     <div>
//       <h1>Preventive Maintenance Log</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>S#</th>
//             <th>Department</th>
//             <th>Operator Name</th>
//             <th>Machine No</th>
//             <th>Maintenance Type</th>
//             <th>Schedule Date</th>
//             <th>Start Date and Time</th>
//             <th>End Date and Time</th>
//             <th>Total Time</th>
//             <th>PMS Package</th>
//             <th>Issued to</th>
//             <th>Issued By</th>
//             <th>Remarks</th>
//           </tr>
//         </thead>
//         <tbody>
//           <td>
//             {" "}
//             <input type="number" />
//           </td>
//           <td>
//             <select>
//               <option>ST-1</option>
//               <option>ST-2</option>
//               <option>ST-3</option>
//               <option>ST-4</option>
//               <option>ST-5</option>
//               <option>ST-6</option>
//               <option>ST-7</option>
//             </select>
//           </td>
//           <td>
//             <input type="text" />
//           </td>
//           <td>
//             <input type="number"/>
//           </td>
//           <td>
//             <select>
//               <option>MLP</option>
//               <option>PMS</option>
//             </select>
//           </td>
//           <td>
//             <select>
//               {dates.map((date, index) => (
//                 <option key={index} value={date}>
//                   {date}
//                 </option>
//               ))}
//             </select>
//           </td>
//           <td>
//             <input type="datetime-local"/>
//           </td>
//           <td>
//             <input type="datetime-local"/>
//           </td>
//           <td>
//             <input type="time"/>
//           </td>
//           <td>
//             <select>
//               <option>
//                 PMS-1
//               </option>
//               <option>
//                 PMS-2
//               </option>
//             </select>
//           </td>
//           <td>
//             <input type="text"/>
//           </td>
//           <td>
//             <input type="text"/>
//           </td>
//           <td>
//             <input type="text"/>
//           </td>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PreventiveMaintenanceLog;
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import "./PreventiveMaintenanceLog.css"; // Import the updated CSS file

const convertExcelDate = (excelSerial) => {
  const excelStartDate = new Date(1899, 11, 30);
  const date = new Date(excelStartDate.getTime() + excelSerial * 86400000);

  const day = date.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const PreventiveMaintenanceLog = () => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetch("/validation.xlsx")
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const worksheet = workbook.Sheets["Validation (2)"];

        let jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Convert the date field and extract only the date
        const extractedDates = jsonData.map((item) =>
          convertExcelDate(item.Date)
        );

        setDates(extractedDates);
      })
      .catch((error) =>
        console.error("Error fetching or parsing Excel file:", error)
      );
  }, []);

  return (
    <div className="container">
      <h1 className="title">Preventive Maintenance Log</h1>
      <table className="log-table">
        <thead>
          <tr>
            <th>S#</th>
            <th>Department</th>
            <th>Operator Name</th>
            <th>Machine No</th>
            <th>Maintenance Type</th>
            <th>Schedule Date</th>
            <th>Start Date and Time</th>
            <th>End Date and Time</th>
            <th>Total Time</th>
            <th>PMS Package</th>
            <th>Issued to</th>
            <th>Issued By</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="number" className="input-field" />
            </td>
            <td>
              <select className="select-field">
                <option>ST-1</option>
                <option>ST-2</option>
                <option>ST-3</option>
                <option>ST-4</option>
                <option>ST-5</option>
                <option>ST-6</option>
                <option>ST-7</option>
              </select>
            </td>
            <td>
              <input type="text" className="input-field" />
            </td>
            <td>
              <input type="number" className="input-field" />
            </td>
            <td>
              <select className="select-field">
                <option>MLP</option>
                <option>PMS</option>
              </select>
            </td>
            <td>
              <select className="select-field">
                {dates.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <input type="datetime-local" className="input-field" />
            </td>
            <td>
              <input type="datetime-local" className="input-field" />
            </td>
            <td>
              <input type="time" className="input-field" />
            </td>
            <td>
              <select className="select-field">
                <option>PMS-1</option>
                <option>PMS-2</option>
              </select>
            </td>
            <td>
              <input type="text" className="input-field" />
            </td>
            <td>
              <input type="text" className="input-field" />
            </td>
            <td>
              <input type="text" className="input-field" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PreventiveMaintenanceLog;

