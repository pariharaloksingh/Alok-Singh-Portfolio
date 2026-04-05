import React from "react";

const ThemeToggle = ({ dark, setDark }) => {
  const handleToggle = () => {
    console.log("Button clicked");
    setDark(!dark);
  };

  return (
    <button
      onClick={handleToggle}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </button>
  );
};

export default ThemeToggle;