import React from "react";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden p-2 bg-gray-500 text-white"
      >
        Open
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex justify-between">
          <h1>Sidebar</h1>
          <button onClick={() => setOpen(false)}>❌</button>
        </div>

        <ul className="p-4 space-y-2">
          <li>Dashboard</li>
          <li>Users</li>
          <li>Projects</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;