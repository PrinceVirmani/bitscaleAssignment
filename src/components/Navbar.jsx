import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-3 bg-gray-100 border-b border-gray-300">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm cursor-pointer">⬅️</span>
          <span className="font-bold text-sm">Name of the file</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-gray-800 peer-focus:ring-2 peer-focus:ring-gray-500 transition-all duration-300"></div>
          <div className="absolute w-4 h-4 bg-white rounded-full transform -translate-y-1/2 top-1/2 left-1 transition-all duration-300 peer-checked:translate-x-5"></div>
        </label>

        <span className="text-sm text-gray-600">Autosave</span>

        <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm">
          Save
        </button>
      </div>
    </div>
  );
};

export default Navbar;
