import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import Table from "./components/Table";

const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Navbar */}
        <Navbar />

        {/* Toolbar */}
        <Toolbar />

        {/* Table */}
        <Table />
      </div>
    </div>
  );
};

export default App;
