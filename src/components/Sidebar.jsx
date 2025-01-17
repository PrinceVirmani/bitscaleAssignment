import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full w-16 bg-gray-100 flex flex-col justify-between py-4 items-center border-r border-gray-300">
      {/* Top Icons */}
      <div className="flex flex-col gap-4 items-center">
        <button className="w-8 h-8 bg-gray-200 rounded flex justify-center items-center">
          📋
        </button>
        <button className="w-8 h-8 bg-green-200 rounded flex justify-center items-center">
          ⚙️
        </button>
        <button className="w-8 h-8 bg-gray-200 rounded flex justify-center items-center">
          🔄
        </button>
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col gap-4 items-center">
        <button className="w-8 h-8 bg-pink-200 rounded flex justify-center items-center">
          📝
        </button>
        <button className="w-8 h-8 bg-pink-500 rounded flex justify-center items-center text-white">
          🚮
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
