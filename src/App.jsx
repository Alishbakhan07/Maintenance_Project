// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import Guidelines from "./components/Guidelines";
// import MachineList from "./components/MachineList";
// import InventoryLog from "./components/InventoryLog";
// import BreakdownLog from "./components/BreakdownLog";
// import PreventiveMaintenanceLog from "./components/PreventiveMaintenanceLog";
// import Validation from "./components/Validation";
// import ParentComponent from "./components/ParentComponent";
// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100 p-4">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/guidelines" element={<Guidelines />} />
//           <Route path="/machine-list" element={<MachineList />} />
//           <Route path="/inventory-log" element={<InventoryLog />} />
//           <Route path="/breakdown-log" element={<BreakdownLog />} />
//           <Route path="/preventive-maintenance-log" element={<PreventiveMaintenanceLog />} />
//           <Route path="/validation" element={<Validation />} />
//           {/* <Route path="/parent-component" element={<ParentComponent/>}/> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Guidelines from "./components/Guidelines";
import MachineList from "./components/MachineList";
import InventoryLog from "./components/InventoryLog";
import BreakdownLog from "./components/BreakdownLog";
import PreventiveMaintenanceLog from "./components/PreventiveMaintenanceLog";
import Validation from "./components/Validation";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/machine-list" element={<MachineList />} />
          <Route path="/inventory-log" element={<InventoryLog />} />
          <Route path="/breakdown-log" element={<BreakdownLog />} />
          <Route path="/preventive-maintenance-log" element={<PreventiveMaintenanceLog />} />
          <Route path="/validation" element={<Validation />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;

