import React from "react";

const Table = () => {
  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      status: "Active",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      status: "Pending",
    },
  ];

  return (
    <div className="p-5">
      <div className="overflow-x-auto border border-gray-300 rounded-md">
        <table className="min-w-full table-auto bg-white">
          {/* Table Header */}
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Status
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {tableData.map((row) => (
              <tr
                key={row.id}
                className="border-b hover:bg-gray-50 transition duration-200"
              >
                <td className="px-6 py-4 text-sm text-gray-700">{row.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{row.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{row.email}</td>
                <td
                  className={`px-6 py-4 text-sm font-medium ${
                    row.status === "Active"
                      ? "text-green-500"
                      : row.status === "Inactive"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
