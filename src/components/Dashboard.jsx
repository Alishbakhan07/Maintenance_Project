import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Al Rahim Textile Industries Dashboard</h1>
      <nav className="space-x-4">
        <Link to="/guidelines" className="text-blue-500">Guidelines</Link>
        <Link to="/machine-list" className="text-blue-500">Machine List</Link>
        <Link to="/inventory-log" className="text-blue-500">Inventory Log</Link>
        <Link to="/breakdown-log" className="text-blue-500">Breakdown Log</Link>
        <Link to="/preventive-maintenance-log" className="text-blue-500">Preventive Maintenance Log</Link>
        <Link to="/validation" className="text-blue-500">Validation</Link>
      </nav>
    </div>
  );
}

export default Dashboard;
