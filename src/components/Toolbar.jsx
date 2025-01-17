import React from "react";

const SearchToolbar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-3   ">
      <div className="flex items-center justify-between gap-2  p-2 ">
        <div className="flex items-center justify-between rounded border border-gray-300">
          <span className="text-gray-600">🔍</span>
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-sm ml-2"
          />
        </div>
        <div className="ml-2 flex gap-2">
          <button className="text-sm text-gray-600">1/1 Row</button>
          <button className="text-sm text-gray-600">3/3 Column</button>
          <button className="text-sm text-gray-600">0 Filter</button>
          <button className="text-sm text-gray-600">Sort</button>
        </div>
      </div>

      {/* Toolbar Buttons */}
      <div className="flex items-center gap-4">
        {/* Action Buttons */}
        <button className="bg-gray-800 text-white px-3 py-2 rounded text-sm">
          Enrich
        </button>
        <button className="text-gray-600 text-lg">🔗</button>
        <button className="text-gray-600 text-lg">📥</button>
        <button className="text-red-500 text-lg">🚮</button>
      </div>
    </div>
  );
};

export default SearchToolbar;
