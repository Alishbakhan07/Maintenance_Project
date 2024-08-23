import React from "react";

function BreakdownLog() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Breakdown Log</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Machine Name</th>
            <th className="px-4 py-2">Issue</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through breakdown log data and render rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default BreakdownLog;
