import React from "react";

function InventoryLog() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Inventory Log</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Item Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through inventory log data and render rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryLog;
